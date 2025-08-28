ServerEvents.recipes(event => {
    let jsonPaths = JsonIO.findJsonInDirectory("kubejs/datamodify")
    
    jsonPaths.forEach(jsonPath => {
        let originalJson = JsonIO.read(jsonPath)
        let modified = false;

        const fluidMaterials = [
            'precious_alloy', 'tin', 'silver', 'zinc', 'nickel', 'lead', 'beryllium',
            'molybdenum', 'brass', 'gold', 'iron', 'bronze', 'copper', 'cobalt', 
            'manganese', 'slag', 'steel', 'aluminum', 'uranium'
        ];

        const prefixes = ['forge:', 'tconstruct:'];

        // 处理顶层 result 字段 (tag 和 fluid)
        if (originalJson && originalJson.result) {
            if (originalJson.result.tag) {
                prefixes.forEach(prefix => {
                    fluidMaterials.forEach(material => {
                        let tictag = prefix + 'molten_' + material
                        let gttag = 'forge:' + material
                        if (originalJson.result.tag == tictag) {
                            originalJson.result.tag = gttag
                            modified = true
                            console.log(`已将 ${tictag} 替换为 ${gttag} 在 result.tag 中`)
                        }
                    })
                })
            }
            if (originalJson.result.fluid) {
                prefixes.forEach(prefix => {
                    fluidMaterials.forEach(material => {
                        let tictag = prefix + 'molten_' + material
                        let gttag = 'gtceu:' + material
                        if (originalJson.result.fluid == tictag) {
                            originalJson.result.fluid = gttag
                            modified = true
                            console.log(`已将 ${tictag} 替换为 ${gttag} 在 result.fluid 中`)
                        }
                    })
                })
            }
        }

        // 处理 recipes 数组中的每个 recipe
        if (originalJson && originalJson.recipes && Array.isArray(originalJson.recipes)) {
            originalJson.recipes.forEach(recipeObj => {
                // 处理 recipe.result (tag 和 fluid)
                if (recipeObj.recipe && recipeObj.recipe.result) {
                    if (recipeObj.recipe.result.tag) {
                        prefixes.forEach(prefix => {
                            fluidMaterials.forEach(material => {
                                let tictag = prefix + 'molten_' + material
                                let gttag = 'forge:' + material
                                if (recipeObj.recipe.result.tag == tictag) {
                                    recipeObj.recipe.result.tag = gttag
                                    modified = true
                                    console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.result.tag 中`)
                                }
                            })
                        })
                    }
                    if (recipeObj.recipe.result.fluid) {
                        prefixes.forEach(prefix => {
                            fluidMaterials.forEach(material => {
                                let tictag = prefix + 'molten_' + material
                                let gttag = 'gtceu:' + material
                                if (recipeObj.recipe.result.fluid == tictag) {
                                    recipeObj.recipe.result.fluid = gttag
                                    modified = true
                                    console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.result.fluid 中`)
                                }
                            })
                        })
                    }
                }

                // 处理 recipe.inputs 数组 (tag 和 fluid)
                if (recipeObj.recipe && recipeObj.recipe.inputs && Array.isArray(recipeObj.recipe.inputs)) {
                    recipeObj.recipe.inputs.forEach(input => {
                        if (input) {
                            if (input.tag) {
                                prefixes.forEach(prefix => {
                                    fluidMaterials.forEach(material => {
                                        let tictag = prefix + 'molten_' + material
                                        let gttag = 'forge:' + material
                                        if (input.tag == tictag) {
                                            input.tag = gttag
                                            modified = true
                                            console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.inputs.tag 中`)
                                        }
                                    })
                                })
                            }
                            if (input.fluid) {
                                prefixes.forEach(prefix => {
                                    fluidMaterials.forEach(material => {
                                        let tictag = prefix + 'molten_' + material
                                        let gttag = 'gtceu:' + material
                                        if (input.fluid == tictag) {
                                            input.fluid = gttag
                                            modified = true
                                            console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.inputs.fluid 中`)
                                        }
                                    })
                                })
                            }
                        }
                    })
                }

                // 处理 recipe.byproducts (可能是数组或对象)
                if (recipeObj.recipe && recipeObj.recipe.byproducts) {
                    if (Array.isArray(recipeObj.recipe.byproducts)) {
                        // byproducts 是数组
                        recipeObj.recipe.byproducts.forEach(byproduct => {
                            if (byproduct) {
                                if (byproduct.tag) {
                                    prefixes.forEach(prefix => {
                                        fluidMaterials.forEach(material => {
                                            let tictag = prefix + 'molten_' + material
                                            let gttag = 'forge:' + material
                                            if (byproduct.tag == tictag) {
                                                byproduct.tag = gttag
                                                modified = true
                                                console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.byproducts.tag 中`)
                                            }
                                        })
                                    })
                                }
                                if (byproduct.fluid) {
                                    prefixes.forEach(prefix => {
                                        fluidMaterials.forEach(material => {
                                            let tictag = prefix + 'molten_' + material
                                            let gttag = 'gtceu:' + material
                                            if (byproduct.fluid == tictag) {
                                                byproduct.fluid = gttag
                                                modified = true
                                                console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.byproducts.fluid 中`)
                                            }
                                        })
                                    })
                                }
                            }
                        })
                    } else if (recipeObj.recipe.byproducts) {
                        // byproducts 是单个对象
                        if (recipeObj.recipe.byproducts.tag) {
                            prefixes.forEach(prefix => {
                                fluidMaterials.forEach(material => {
                                    let tictag = prefix + 'molten_' + material
                                    let gttag = 'forge:' + material
                                    if (recipeObj.recipe.byproducts.tag == tictag) {
                                        recipeObj.recipe.byproducts.tag = gttag
                                        modified = true
                                        console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.byproducts.tag 中`)
                                    }
                                })
                            })
                        }
                        if (recipeObj.recipe.byproducts.fluid) {
                            prefixes.forEach(prefix => {
                                fluidMaterials.forEach(material => {
                                    let tictag = prefix + 'molten_' + material
                                    let gttag = 'gtceu:' + material
                                    if (recipeObj.recipe.byproducts.fluid == tictag) {
                                        recipeObj.recipe.byproducts.fluid = gttag
                                        modified = true
                                        console.log(`已将 ${tictag} 替换为 ${gttag} 在 recipe.byproducts.fluid 中`)
                                    }
                                })
                            })
                        }
                    }
                }
            })
        }

        // 处理 inputs 字段 (tag 和 fluid)
        if (originalJson && originalJson.inputs) {
            if (Array.isArray(originalJson.inputs)) {
                // inputs 是数组
                originalJson.inputs.forEach(input => {
                    if (input) {
                        if (input.tag) {
                            prefixes.forEach(prefix => {
                                fluidMaterials.forEach(material => {
                                    let tictag = prefix + 'molten_' + material
                                    let gttag = 'forge:' + material
                                    if (input.tag == tictag) {
                                        input.tag = gttag
                                        modified = true
                                        console.log(`已将 ${tictag} 替换为 ${gttag} 在 inputs.tag 中`)
                                    }
                                })
                            })
                        }
                        if (input.fluid) {
                            prefixes.forEach(prefix => {
                                fluidMaterials.forEach(material => {
                                    let tictag = prefix + 'molten_' + material
                                    let gttag = 'gtceu:' + material
                                    if (input.fluid == tictag) {
                                        input.fluid = gttag
                                        modified = true
                                        console.log(`已将 ${tictag} 替换为 ${gttag} 在 inputs.fluid 中`)
                                    }
                                })
                            })
                        }
                    }
                })
            } else if (originalJson.inputs) {
                // inputs 是单个对象
                if (originalJson.inputs.tag) {
                    prefixes.forEach(prefix => {
                        fluidMaterials.forEach(material => {
                            let tictag = prefix + 'molten_' + material
                            let gttag = 'forge:' + material
                            if (originalJson.inputs.tag == tictag) {
                                originalJson.inputs.tag = gttag
                                modified = true
                                console.log(`已将 ${tictag} 替换为 ${gttag} 在 inputs.tag 中`)
                            }
                        })
                    })
                }
                if (originalJson.inputs.fluid) {
                    prefixes.forEach(prefix => {
                        fluidMaterials.forEach(material => {
                            let tictag = prefix + 'molten_' + material
                            let gttag = 'gtceu:' + material
                            if (originalJson.inputs.fluid == tictag) {
                                originalJson.inputs.fluid = gttag
                                modified = true
                                console.log(`已将 ${tictag} 替换为 ${gttag} 在 inputs.fluid 中`)
                            }
                        })
                    })
                }
            }
        }

        // 处理顶层 byproducts 字段 (tag 和 fluid)
        if (originalJson && originalJson.byproducts) {
            if (Array.isArray(originalJson.byproducts)) {
                // byproducts 是数组
                originalJson.byproducts.forEach(byproduct => {
                    if (byproduct) {
                        if (byproduct.tag) {
                            prefixes.forEach(prefix => {
                                fluidMaterials.forEach(material => {
                                    let tictag = prefix + 'molten_' + material
                                    let gttag = 'forge:' + material
                                    if (byproduct.tag == tictag) {
                                        byproduct.tag = gttag
                                        modified = true
                                        console.log(`已将 ${tictag} 替换为 ${gttag} 在 byproducts.tag 中`)
                                    }
                                })
                            })
                        }
                        if (byproduct.fluid) {
                            prefixes.forEach(prefix => {
                                fluidMaterials.forEach(material => {
                                    let tictag = prefix + 'molten_' + material
                                    let gttag = 'gtceu:' + material
                                    if (byproduct.fluid == tictag) {
                                        byproduct.fluid = gttag
                                        modified = true
                                        console.log(`已将 ${tictag} 替换为 ${gttag} 在 byproducts.fluid 中`)
                                    }
                                })
                            })
                        }
                    }
                })
            } else if (originalJson.byproducts) {
                // byproducts 是单个对象
                if (originalJson.byproducts.tag) {
                    prefixes.forEach(prefix => {
                        fluidMaterials.forEach(material => {
                            let tictag = prefix + 'molten_' + material
                            let gttag = 'forge:' + material
                            if (originalJson.byproducts.tag == tictag) {
                                originalJson.byproducts.tag = gttag
                                modified = true
                                console.log(`已将 ${tictag} 替换为 ${gttag} 在 byproducts.tag 中`)
                            }
                        })
                    })
                }
                if (originalJson.byproducts.fluid) {
                    prefixes.forEach(prefix => {
                        fluidMaterials.forEach(material => {
                            let tictag = prefix + 'molten_' + material
                            let gttag = 'gtceu:' + material
                            if (originalJson.byproducts.fluid == tictag) {
                                originalJson.byproducts.fluid = gttag
                                modified = true
                                console.log(`已将 ${tictag} 替换为 ${gttag} 在 byproducts.fluid 中`)
                            }
                        })
                    })
                }
            }
        }

        // 只有在有修改时才写回文件
        if (modified) {
            JsonIO.write(jsonPath, originalJson)
            console.log(`已修改文件: ${jsonPath}`)
        }
    })
    
    console.log("流体标签替换完成！")
})
