// const SoundEvents = Java.loadClass('net.minecraft.sounds.SoundEvents')
// const SoundSource = Java.loadClass('net.minecraft.sounds.SoundSource')

BlockEvents.rightClicked(event => {
  let { player, block, item, hand, level } = event

  // 手里物品和目标方块
  if (item.id == 'gtceu:duct_tape' && block.id == 'minecraft:diamond_block') {
    // 只允许主手触发
    if (hand != 'main_hand') return

    //let sound = SoundEvents.HONEY_BLOCK_BREAK // 直接用静态常量
    //level.playSound(player, block.pos, sound, SoundSource.BLOCKS, 1.0, 1.0)

    // player.playSound(
    // 'minecraft:block.honey_block.break',
    // 100.0, // 音量
    // 100.0  // 音调
    // )gtceu:electric_blast_furnace/graphite_gas_production_method_1

    // 消耗一个 A
    item.count--

    // 随机数量 1~3 个 C
    let amount = Math.floor(Math.random() * 5) + 1
    let reward = Item.of('gtceu:small_graphene_dust', amount)

    // 尝试塞进背包，不够就掉落
    if (!player.give(reward)) {
      // 背包塞不下 → 掉落在玩家脚下
      level.spawnItem(reward, player.x, player.y, player.z)
    }

    // 防止继续打开 GUI 之类的
    event.cancel()
  }
})