ServerEvents.recipes(event => {
    remove_recipes_id(event, [
        //删除TiC青铜配方
        //"tconstruct:tools/materials/melting/bronze",
        "tconstruct:smeltery/alloys/molten_bronze",
        ///tconstruct:smeltery\/melting\/metal\/bronze\/(.*)/,
        //删除TiC黄铜配方
        //"tconstruct:tools/materials/melting/plated_slimewood",
        "tconstruct:smeltery/alloys/molten_brass",
        ///tconstruct:smeltery\/melting\/metal\/brass\/(.*)/,
        //删除齿轮,杆，板铸模配方
        /tconstruct:smeltery\/casts\/(.*)\/gear/,
        /tconstruct:smeltery\/casts\/(.*)\/rod/,
        /tconstruct:smeltery\/casts\/(.*)\/plate/,
        //删除TiC安山合金配方
        /tconstruct:compat\/create\/andesite_alloy_(.*)/,
        //删除TiC熔融粘土配方
        "tconstruct:smeltery/casting/clay/block",
        /tconstruct:smeltery\/melting\/clay\/(.*)/,
        /tconstruct:smeltery\/casting\/clay\/brick_(.*)_cast/,
        //移除熔铸炉钢配方
        "tconstruct:smeltery/melting/metal/iron/chain_boots",
        "tconstruct:smeltery/melting/metal/iron/chain_chestplate",
        "tconstruct:smeltery/melting/metal/iron/chain_helmet",
        "tconstruct:smeltery/melting/metal/iron/chain_leggings",
        //容器灌注配方
        "tconstruct:smeltery/casting/filling/scorched_ingot_gauge",
        "tconstruct:smeltery/casting/filling/scorched_ingot_tank",
        "tconstruct:smeltery/casting/filling/scorched_fuel_gauge",
        "tconstruct:smeltery/casting/filling/scorched_fuel_tank",
        "tconstruct:smeltery/casting/filling/scorched_lantern_full",
        "tconstruct:smeltery/casting/filling/scorched_lantern_pixel",
        "tconstruct:smeltery/casting/filling/seared_ingot_tank",
        "tconstruct:smeltery/casting/filling/seared_ingot_gauge",
        "tconstruct:smeltery/casting/filling/seared_fuel_gauge",
        "tconstruct:smeltery/casting/filling/seared_fuel_tank",
        "tconstruct:smeltery/casting/filling/seared_lantern_full",
        "tconstruct:smeltery/casting/filling/seared_lantern_pixel",
        //钨
        "tconstruct:smeltery/alloys/molten_tungsten",
        /tconstruct:smeltery\/melting\/metal\/tungsten\/(.*)/,
        //饿
        "tconstruct:smeltery/alloys/molten_osmium",
        /tconstruct:smeltery\/melting\/metal\/osmium\/(.*)/,
        //琥珀金合金配方
        "tconstruct:smeltery/alloys/molten_electrum",
        //玫瑰金合金配方
        "tconstruct:smeltery/alloys/molten_rose_gold",
        //殷钢合金配方
        "tconstruct:smeltery/alloys/molten_invar",
        //铁粒
        "tconstruct:smeltery/melting/metal/iron/nugget",
        //玻璃
        'tconstruct:smeltery/entity_melting/heads/creeper',
        'tconstruct:smeltery/melting/amethyst/tinted_glass',
        'tconstruct:smeltery/melting/ender/end_crystal',
        'tconstruct:smeltery/melting/metal/copper/gauge',
        'tconstruct:smeltery/melting/obsidian/beacon',
        'tconstruct:smeltery/melting/obsidian/gauge',
        'tconstruct:smeltery/melting/quartz/daylight_detector',
        'tconstruct:smeltery/melting/scorched/glass_tinted',
        'tconstruct:smeltery/melting/seared/fluid_cannon',
        'tconstruct:smeltery/melting/seared/fuel_tank',
        'tconstruct:smeltery/melting/seared/gauge',
        'tconstruct:smeltery/melting/seared/glass',
        'tconstruct:smeltery/melting/seared/glass_tinted',
        'tconstruct:smeltery/melting/seared/ingot_tank',
        'tconstruct:smeltery/melting/seared/lantern',
        'tconstruct:smeltery/melting/seared/melter',
        'tconstruct:smeltery/melting/seared/pane',
        'tconstruct:smeltery/melting/seared/seared_casting_tank',
        'tconstruct:tools/materials/melting/glass',
        //末影之眼
        'tconstruct:smeltery/casting/ender/eye'
    ])
})
//熔铸炉矿物配方
ServerEvents.recipes(event => {
    // 标签id，流体id
	let fluidmaterials = ['diamond', 'emerald', 'precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium',
                         'molybdenum', 'brass', 'gold', 'iron', 'bronze', 'copper', 'cobalt', 'manganese', 'slag', 'steel', 
                         'aluminum', 'uranium', 'glass', 'invar', 'platinum']
	fluidmaterials.forEach(fluidmaterial => {
		remove_recipes_id(event, [
            `tconstruct:smeltery/melting/metal/${fluidmaterial}/raw`,
            `tconstruct:smeltery/melting/metal/${fluidmaterial}/raw_block`,
            `tconstruct:smeltery/melting/metal/${fluidmaterial}/ore_singular`,
            `tconstruct:smeltery/melting/metal/${fluidmaterial}/ore_dense`,
            `tconstruct:smeltery/melting/metal/${fluidmaterial}/ore_sparse`,
            `tconstruct:smeltery/melting/metal/${fluidmaterial}/geore`,
            'tconstruct:smeltery/melting/metal/gold/gilded_blackstone',
            'tconstruct:smeltery/melting/metal/gold/nether_gold_ore'
        ])
	})
})