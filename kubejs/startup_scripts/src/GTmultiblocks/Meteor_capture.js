GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
 
    let builder=event.create('mark_of_falling_tower')
    .category('ctnh')
    .setMaxIOSize(1, 32, 1, 0)
    .setEUIO('in')
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.MINER);
})
const $RecipeHelper=Java.loadClass('com.gregtechceu.gtceu.api.recipe.RecipeHelper');
const $GTUtil=Java.loadClass('com.gregtechceu.gtceu.utils.GTUtil');
function powerBasedParallel(basic, addition) {
    return (machine, recipe, params, result) =>
    {
        
        var hatch=4;
        machine.getParts().forEach( part => {
            try{
                hatch=part.getCurrentParallel();
                hatch=Number(part.getTier());
            }catch(error){
            }
        });
        //console.log(hatch);
        
        var bonus=0-$RecipeHelper.getRecipeEUtTier(recipe)+Number(machine.getTier());
        if(bonus>0) {
            return GTRecipeModifiers.accurateParallel(machine, recipe, (hatch-3)*(bonus*addition+basic), false).getFirst();
        } else{ 
            return GTRecipeModifiers.accurateParallel(machine, recipe, (hatch-3)*basic, false).getFirst();
        }    
    }
} 
const $RecipeModifierList=Java.loadClass('com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifierList');
const $CustomMultiblockBuilder=Java.loadClass('com.gregtechceu.gtceu.integration.kjs.builders.machine.CustomMultiblockBuilder');
GTCEuStartupEvents.registry('gtceu:machine', event => {
    /**
     * @type {Internal.CustomMultiblockBuilder}
     */
    let builder=event.create('meteor_capturer', 'multiblock')
    
    builder.rotationState(RotationState.NON_Y_AXIS)
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .noRecipeModifier()
        .recipeType(GTRecipeTypes.get('mark_of_falling_tower'))
        .workableCasingRenderer(
            "kubejs:block/blood_casing",
            "gtceu:block/machines/miner",
            false
        )
        .onWorking(machine=>{
            var pos=machine.self().getPos();
            var level=machine.self().getLevel();
            var progress=machine.getProgress();
            var maxprogress=machine.getMaxProgress();
            var radius=machine.getRecipeLogic().lastOriginRecipe.data.getInt('radius');
            var rock=machine.getRecipeLogic().lastOriginRecipe.data.getString('rock');
            var block;
            try{
                block=Block.getBlock(rock).getBlockStates()[0];
            }catch(error){
                block=Blocks.STONE.getBlockStates()[0];
            }
            //build
            var center=pos.offset(0,15,0);
            if(radius<=0 || maxprogress<=15) return true;
            if(progress==0){
                for(var i=-radius;i<=radius;i++){
                    for(var j=-radius;j<=radius;j++){
                        for(var k=-radius;k<=radius;k++){
                            if(i*i+j*j+k*k<=(radius+0.5)*(radius+0.5)){
                                try{
                                    level.setBlockAndUpdate(center.offset(i,j,k), block);
                                }catch(error){
                                    block=Blocks.STONE.getBlockStates()[0];
                                }
                                
                            }
                        }
                    }
                }
            }else if(progress>=maxprogress/5){
                var piece=maxprogress*0.8/(radius*2+2);
                var piece2=piece/(radius*2+2);
                if(piece2>1){
                    var phase=progress-maxprogress/5;
                    if(Math.trunc(phase/piece2)>Math.trunc((phase-1)/piece2)){
                        var i=-(Math.trunc(phase/piece2)%(radius*2+2))+radius+1;
                        var j=-Math.trunc(phase/piece)+radius+1;
                        for(var k=-radius;k<=radius;k++){
                            if(i*i+j*j+k*k<=(radius+0.5)*(radius+0.5)){
                                    level.setBlockAndUpdate(center.offset(i,j,k), Blocks.AIR.blockStates[0]);
                            }
                        }
                    }
                }
                else{
                    var phase=progress-maxprogress/5;
                    if(Math.trunc(phase/piece)>Math.trunc((phase-1)/piece)){
                        var j=-Math.trunc(phase/piece)+radius+1;
                        for(var i=-radius;i<=radius;i++){
                            for(var k=-radius;k<=radius;k++){
                                if(i*i+j*j+k*k<=(radius+0.5)*(radius+0.5)){
                                    level.setBlockAndUpdate(center.offset(i,j,k), Blocks.AIR.blockStates[0]);
                                }
                            }
                        }
                    }
                }
                
            }
            return true;
        })
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "############BBB############", "###########BCCCB###########", "##########BBCCCBB##########", "###########BCCCB###########", "############BBB############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "########BB#######BB########", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "######BB###########BB######", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#####B###############B#####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "##########BBBBBBB##########", "########BB#######BB########", "#######B###########B#######", "######B#############B######", "#####B###############B#####", "#####B###############B#####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "#####B###############B#####", "#####B###############B#####", "######B#############B######", "#######B###########B#######", "########BB#######BB########", "##########BBBBBBB##########", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "########BB#######BB########", "#######B###########B#######", "######C#############C######", "#####B###############B#####", "####B#################B####", "####B#################B####", "###########################", "###########################", "###########################", "###B###################B###", "###########################", "###########################", "###########################", "####B#################B####", "####B#################B####", "#####B###############B#####", "######C#############C######", "#######B###########B#######", "########BB#######BB########", "#############B#############", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "#######B###########B#######", "######C#############C######", "#####C###############C#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "##B#####################B##", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####C###############C#####", "######C#############C######", "#######B###########B#######", "###########################", "#############B#############", "###########################", "###########################") 
            .aisle("###########DDDDD###########", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "######B#############B######", "#####B###############B#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "##B#####################B##", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####B###############B#####", "######B#############B######", "###########################", "#############B#############", "###########################", "###########################") 
            .aisle("#########DD##D##DD#########", "#############B#############", "###########################", "###########################", "#############B#############", "###########################", "###########################", "#####B###############B#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#B#######################B#", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####B###############B#####", "###########################", "###########################", "#############B#############", "###########################") 
            .aisle("########D#########D########", "###########################", "###########BBBBB###########", "###########################", "#############B#############", "###########################", "###########################", "#####B###############B#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#B#######################B#", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####B###############B#####", "###########################", "###########################", "#############B#############", "###########################") 
            .aisle("########D#########D########", "###########################", "##########B#####B##########", "#############B#############", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "B#########################B", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "#############B#############") 
            .aisle("#######D###########D#######", "###########################", "#########B#######B#########", "############BBB############", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "B#########################B", "B#########################B", "B#########################B", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "############BBB############") 
            .aisle("#######D###########D#######", "###########################", "#########B#######B#########", "###########BCCCB###########", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "B#########################B", "C#########################C", "C#########################C", "C#########################C", "B#########################B", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########BCCCB###########") 
            .aisle("#######DD####D####DD#######", "########B####@####B########", "#########B###B###B#########", "##########BBCCCBB##########", "########BB#######BB########", "######BB###########BB######", "#####B###############B#####", "####B#################B####", "###B###################B###", "##B#####################B##", "##B#####################B##", "#B#######################B#", "#B#######################B#", "B#########################B", "B#########################B", "C#########################C", "C#########################C", "C#########################C", "B#########################B", "B#########################B", "#B#######################B#", "#B#######################B#", "##B#####################B##", "##B#####################B##", "###B###################B###", "####B#################B####", "#####B###############B#####", "######BB###########BB######", "########BB#######BB########", "##########BBCCCBB##########") 
            .aisle("#######D###########D#######", "###########################", "#########B#######B#########", "###########BCCCB###########", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "B#########################B", "C#########################C", "C#########################C", "C#########################C", "B#########################B", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########BCCCB###########") 
            .aisle("#######D###########D#######", "###########################", "#########B#######B#########", "############BBB############", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "B#########################B", "B#########################B", "B#########################B", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "############BBB############") 
            .aisle("########D#########D########", "###########################", "##########B#####B##########", "#############B#############", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "B#########################B", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "###########################", "###########################", "###########################", "#############B#############") 
            .aisle("########D#########D########", "###########################", "###########BBBBB###########", "###########################", "#############B#############", "###########################", "###########################", "#####B###############B#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#B#######################B#", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####B###############B#####", "###########################", "###########################", "#############B#############", "###########################") 
            .aisle("#########DD##D##DD#########", "#############B#############", "###########################", "###########################", "#############B#############", "###########################", "###########################", "#####B###############B#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#B#######################B#", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####B###############B#####", "###########################", "###########################", "#############B#############", "###########################") 
            .aisle("###########DDDDD###########", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "######B#############B######", "#####B###############B#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "##B#####################B##", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####B###############B#####", "######B#############B######", "###########################", "#############B#############", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "#######B###########B#######", "######C#############C######", "#####C###############C#####", "####B#################B####", "###########################", "###########################", "###########################", "###########################", "###########################", "##B#####################B##", "###########################", "###########################", "###########################", "###########################", "###########################", "####B#################B####", "#####C###############C#####", "######C#############C######", "#######B###########B#######", "###########################", "#############B#############", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "########BB#######BB########", "#######B###########B#######", "######C#############C######", "#####B###############B#####", "####B#################B####", "####B#################B####", "###########################", "###########################", "###########################", "###B###################B###", "###########################", "###########################", "###########################", "####B#################B####", "####B#################B####", "#####B###############B#####", "######C#############C######", "#######B###########B#######", "########BB#######BB########", "#############B#############", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "##########BBBBBBB##########", "########BB#######BB########", "#######B###########B#######", "######B#############B######", "#####B###############B#####", "#####B###############B#####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "####B#################B####", "#####B###############B#####", "#####B###############B#####", "######B#############B######", "#######B###########B#######", "#################BB########", "##########BBBBBBB##########", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#####B###############B#####", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "######BB###########BB######", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "########BB#######BB########", "###########################", "###########################", "###########################", "#############B#############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .aisle("###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "#############B#############", "############BBB############", "###########BCCCB###########", "##########BBCCCBB##########", "###########BCCCB###########", "############BBB############", "#############B#############", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################", "###########################") 
            .where("#", Predicates.any())
            .where("B", Predicates.blocks("kubejs:blood_casing"))
            .where("C", Predicates.blocks("kubejs:force_field_casing"))
            .where('D', Predicates.blocks("kubejs:blood_casing")
                        .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    )
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )       
})

//This multiblock comes from the modpack THUnion自制整合包vol.2, and is made by Sigmit64