GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('fusion_reactor_zip_mk1', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('fusion_reactor')
        .appearanceBlock(() => Block.getBlock('gtceu:fusion_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("###############################################", "###############################################", "####################ABBBBBA####################", "####################ABCCCBA####################", "####################ABBBBBA####################", "###############################################", "###############################################")
            .aisle("###############################################", "####################ABCCCBA####################", "###################BB#####BB###################", "###################BB#####BB###################", "###################BB#####BB###################", "####################ABCCCBA####################", "###############################################")
            .aisle("####################ABBBBBA####################", "###################BB#####BB###################", "################BBBBB#####BBBBB################", "################BBBDDDDDDDDDBBB################", "################BBBBB#####BBBBB################", "###################BB#####BB###################", "####################ABBBBBA####################")
            .aisle("####################ABCCCBA####################", "################BBBBB#####BBBBB################", "##############BBBBBDDDDDDDDDBBBBB##############", "##############BBDDDDDDDDDDDDDDDBB##############", "##############BBBBBDDDDDDDDDBBBBB##############", "################BBBBB#####BBBBB################", "####################ABCCCBA####################")
            .aisle("####################ABBBBBA####################", "##############BBBBBBB#####BBBBBBB##############", "############BBBBDDDBB#####BBDDDBBBB############", "############BBDDDDDDDDDDDDDDDDDDDBB############", "############BBBBDDDBB#####BBDDDBBBB############", "##############BBBBBBB#####BBBBBBB##############", "####################ABBBBBA####################")
            .aisle("###############################################", "############BBBBBBB#ABCCCBA#BBBBBBB############", "###########BBBDDBBBBB#####BBBBBDDBBB###########", "###########BDDDDDDDBB#####BBDDDDDDDB###########", "###########BBBDDBBBBB#####BBBBBDDBBB###########", "############BBBBBBB#ABCCCBA#BBBBBBB############", "###############################################")
            .aisle("###############################################", "###########BBBBB###############BBBBB###########", "##########BBDDBBBBB#ABEEEBA#BBBBBDDBB##########", "##########BDDDDDBBB#ABE@EBA#BBBDDDDDB##########", "##########BBDDBBBBB#ABEEEBA#BBBBBDDBB##########", "###########BBBBB###############BBBBB###########", "###############################################")
            .aisle("###############################################", "##########BBBB###################BBBB##########", "#########GBDBBBB###############BBBBDBG#########", "#########BDDDDBB###############BBDDDDB#########", "#########GBDBBBB###############BBBBDBG#########", "##########BBBB###################BBBB##########", "###############################################")
            .aisle("###############################################", "#########BBB#######################BBB#########", "########BBDBBB###################BBBDBB########", "########BDDDBB###################BBDDDB########", "########BBDBBB###################BBBDBB########", "#########BBB#######################BBB#########", "###############################################")
            .aisle("###############################################", "########BBB#########################BBB########", "#######GBDBG#######################GBDBG#######", "#######BDDDB#######################BDDDB#######", "#######GBDBG#######################GBDBG#######", "########BBB#########################BBB########", "###############################################")
            .aisle("###############################################", "#######BBB###########################BBB#######", "######BBDBB#########################BBDBB######", "######BDDDB#########################BDDDB######", "######BBDBB#########################BBDBB######", "#######BBB###########################BBB#######", "###############################################")
            .aisle("###############################################", "######BBB#############################BBB######", "#####BBDBG###########################GBDBB#####", "#####BDDDB###########################BDDDB#####", "#####BBDBG###########################GBDBB#####", "######BBB#############################BBB######", "###############################################")
            .aisle("###############################################", "#####BBB###############################BBB#####", "####BBDBB#############################BBDBB####", "####BDDDB#############################BDDDB####", "####BBDBB#############################BBDBB####", "#####BBB###############################BBB#####", "###############################################")
            .aisle("###############################################", "#####BBB###############################BBB#####", "####BBDBB#############################BBDBB####", "####BDDDB#############################BDDDB####", "####BBDBB#############################BBDBB####", "#####BBB###############################BBB#####", "###############################################")
            .aisle("###############################################", "####BBB#################################BBB####", "###BBDBB###############################BBDBB###", "###BDDDB###############################BDDDB###", "###BBDBB###############################BBDBB###", "####BBB#################################BBB####", "###############################################")
            .aisle("###############################################", "####BBB#################################BBB####", "###BBDBB###############################BBDBB###", "###BDDDB###############################BDDDB###", "###BBDBB###############################BBDBB###", "####BBB#################################BBB####", "###############################################")
            .aisle("###############################################", "###BBB###################################BBB###", "##BBDBB#################################BBDBB##", "##BDDDB#################################BDDDB##", "##BBDBB#################################BBDBB##", "###BBB###################################BBB###", "###############################################")
            .aisle("###############################################", "###BBB###################################BBB###", "##BBDBB#################################BBDBB##", "##BDDDB#################################BDDDB##", "##BBDBB#################################BBDBB##", "###BBB###################################BBB###", "###############################################")
            .aisle("###############################################", "###BBB###################################BBB###", "##BBDBB#################################BBDBB##", "##BDDDB#################################BDDDB##", "##BBDBB#################################BBDBB##", "###BBB###################################BBB###", "###############################################")
            .aisle("###############################################", "##BBB#####################################BBB##", "#BBDBB###################################BBDBB#", "#BDDDB###################################BDDDB#", "#BBDBB###################################BBDBB#", "##BBB#####################################BBB##", "###############################################")
            .aisle("##AAA#####################################AAA##", "#ABBBA###################################ABBBA#", "ABBDBBA#################################ABBDBBA", "ABDDDBA#################################ABDDDBA", "ABBDBBA#################################ABBDBBA", "#ABBBA###################################ABBBA#", "##AAA#####################################AAA##")
            .aisle("##BBB#####################################BBB##", "#B###B###################################B###B#", "B##D##B#################################B##D##B", "B#DDD#B#################################B#DDD#B", "B##D##B#################################B##D##B", "#B###B###################################B###B#", "##BBB#####################################BBB##")
            .aisle("##BCB#####################################BCB##", "#C###C###################################C###C#", "B##D##B#################################B##D##B", "C#DDD#C#################################C#DDD#C", "B##D##B#################################B##D##B", "#C###C###################################C###C#", "##BCB#####################################BCB##")
            .aisle("##BCB#####################################BCB##", "#C###C###################################C###C#", "B##D##B#################################B##D##B", "C#DDD#C#################################C#DDD#C", "B##D##B#################################B##D##B", "#C###C###################################C###C#", "##BCB#####################################BCB##")
            .aisle("##BCB#####################################BCB##", "#C###C###################################C###C#", "B##D##B#################################B##D##B", "C#DDD#C#################################C#DDD#C", "B##D##B#################################B##D##B", "#C###C###################################C###C#", "##BCB#####################################BCB##")
            .aisle("##BBB#####################################BBB##", "#B###B###################################B###B#", "B##D##B#################################B##D##B", "B#DDD#B#################################B#DDD#B", "B##D##B#################################B##D##B", "#B###B###################################B###B#", "##BBB#####################################BBB##")
            .aisle("##AAA#####################################AAA##", "#ABBBA###################################ABBBA#", "ABBDBBA#################################ABBDBBA", "ABDDDBA#################################ABDDDBA", "ABBDBBA#################################ABBDBBA", "#ABBBA###################################ABBBA#", "##AAA#####################################AAA##")
            .aisle("###############################################", "##BBB#####################################BBB##", "#BBDBB###################################BBDBB#", "#BDDDB###################################BDDDB#", "#BBDBB###################################BBDBB#", "##BBB#####################################BBB##", "###############################################")
            .aisle("###############################################", "###BBB###################################BBB###", "##BBDBB#################################BBDBB##", "##BDDDB#################################BDDDB##", "##BBDBB#################################BBDBB##", "###BBB###################################BBB###", "###############################################")
            .aisle("###############################################", "###BBB###################################BBB###", "##BBDBB#################################BBDBB##", "##BDDDB#################################BDDDB##", "##BBDBB#################################BBDBB##", "###BBB###################################BBB###", "###############################################")
            .aisle("###############################################", "###BBB###################################BBB###", "##BBDBB#################################BBDBB##", "##BDDDB#################################BDDDB##", "##BBDBB#################################BBDBB##", "###BBB###################################BBB###", "###############################################")
            .aisle("###############################################", "####BBB#################################BBB####", "###BBDBB###############################BBDBB###", "###BDDDB###############################BDDDB###", "###BBDBB###############################BBDBB###", "####BBB#################################BBB####", "###############################################")
            .aisle("###############################################", "####BBB#################################BBB####", "###BBDBB###############################BBDBB###", "###BDDDB###############################BDDDB###", "###BBDBB###############################BBDBB###", "####BBB#################################BBB####", "###############################################")
            .aisle("###############################################", "#####BBB###############################BBB#####", "####BBDBB#############################BBDBB####", "####BDDDB#############################BDDDB####", "####BBDBB#############################BBDBB####", "#####BBB###############################BBB#####", "###############################################")
            .aisle("###############################################", "#####BBB###############################BBB#####", "####BBDBB#############################BBDBB####", "####BDDDB#############################BDDDB####", "####BBDBB#############################BBDBB####", "#####BBB###############################BBB#####", "###############################################")
            .aisle("###############################################", "######BBB#############################BBB######", "#####BBDBG###########################GBDBB#####", "#####BDDDB###########################BDDDB#####", "#####BBDBG###########################GBDBB#####", "######BBB#############################BBB######", "###############################################")
            .aisle("###############################################", "#######BBB###########################BBB#######", "######BBDBB#########################BBDBB######", "######BDDDB#########################BDDDB######", "######BBDBB#########################BBDBB######", "#######BBB###########################BBB#######", "###############################################")
            .aisle("###############################################", "########BBB#########################BBB########", "#######GBDBG#######################GBDBG#######", "#######BDDDB#######################BDDDB#######", "#######GBDBG#######################GBDBG#######", "########BBB#########################BBB########", "###############################################")
            .aisle("###############################################", "#########BBB#######################BBB#########", "########BBDBBB###################BBBDBB########", "########BDDDBB###################BBDDDB########", "########BBDBBB###################BBBDBB########", "#########BBB#######################BBB#########", "###############################################")
            .aisle("###############################################", "##########BBBB###################BBBB##########", "#########GBDBBBB###############BBBBDBG#########", "#########BDDDDBB###############BBDDDDB#########", "#########GBDBBBB###############BBBBDBG#########", "##########BBBB###################BBBB##########", "###############################################")
            .aisle("###############################################", "###########BBBBB###############BBBBB###########", "##########BBDDBBBBB#ABBBBBA#BBBBBDDBB##########", "##########BDDDDDBBB#ABCCCBA#BBBDDDDDB##########", "##########BBDDBBBBB#ABBBBBA#BBBBBDDBB##########", "###########BBBBB###############BBBBB###########", "###############################################")
            .aisle("###############################################", "############BBBBBBB#ABCCCBA#BBBBBBB############", "###########BBBDDBBBBB#####BBBBBDDBBB###########", "###########BDDDDDDDBB#####BBDDDDDDDB###########", "###########BBBDDBBBBB#####BBBBBDDBBB###########", "############BBBBBBB#ABCCCBA#BBBBBBB############", "###############################################")
            .aisle("####################ABBBBBA####################", "##############BBBBBBB#####BBBBBBB##############", "############BBBBDDDBB#####BBDDDBBBB############", "############BBDDDDDDDDDDDDDDDDDDDBB############", "############BBBBDDDBB#####BBDDDBBBB############", "##############BBBBBBB#####BBBBBBB##############", "####################ABBBBBA####################")
            .aisle("####################ABCCCBA####################", "################BBBBB#####BBBBB################", "##############BBBBBDDDDDDDDDBBBBB##############", "##############BBDDDDDDDDDDDDDDDBB##############", "##############BBBBBDDDDDDDDDBBBBB##############", "################BBBBB#####BBBBB################", "####################ABCCCBA####################")
            .aisle("####################ABBBBBA####################", "###################BB#####BB###################", "################BBBBB#####BBBBB################", "################BBBDDDDDDDDDBBB################", "################BBBBB#####BBBBB################", "###################BB#####BB###################", "####################ABBBBBA####################")
            .aisle("###############################################", "####################ABCCCBA####################", "###################BB#####BB###################", "###################BB#####BB###################", "###################BB#####BB###################", "####################ABCCCBA####################", "###############################################")
            .aisle("###############################################", "###############################################", "####################ABBBBBA####################", "####################ABCCCBA####################", "####################ABBBBBA####################", "###############################################", "##############################################H")
            .where("#", Predicates.any())
            .where("A", Predicates.blocks("gtceu:stainless_steel_frame"))
            .where("B", Predicates.blocks("gtceu:fusion_casing"))
            .where("C", Predicates.blocks("gtceu:fusion_glass"))
            .where("D", Predicates.blocks("gtceu:superconducting_coil"))
            .where("E", Predicates.blocks("gtceu:fusion_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .where("G", Predicates.blocks('gtceu:luv_energy_input_hatch').setExactLimit(32))
            .where("H", Predicates.blocks("gtceu:tungsten_steel_frame"))
            .build()
        )
        .workableCasingRenderer('gtceu:block/casings/fusion/fusion_casing', 'gtceu:block/multiblock/fusion_reactor', false)
})               