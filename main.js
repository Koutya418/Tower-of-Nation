function drawHex(ctx, x, y, r, flag, border_colour, fill_colour) {
  ctx.strokeStyle = border_colour;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    let rad = Math.PI* 2 / 6 * i
    if (i === 0) {
      ctx.moveTo(x + Math.cos(rad) * r, y + Math.sin(rad) * r);
    } else {
      ctx.lineTo(x + Math.cos(rad) * r, y + Math.sin(rad) * r);
    }
    ctx.stroke();
  };
  ctx.closePath();
  ctx.stroke();
  if (flag) {
    ctx.opacity = 0.1;
    ctx.fillStyle = fill_colour;
    ctx.fill()
    ctx.opacity = 1;
  };
};

/* 建築物データ

雛形
const building_name = {
    'building_cost' : {
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'cost' : 5,
        },
        {
          'type' : 'electric_power',
          'cost' : 5,
        },
        {
          'type' : 'network',
          'cost' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : []
    }
  }
*/
const empty = {
    'name' : '更地',
    'tile_colour' : '#00ff00',
    'building_cost' : {
      'resource' : [],
      'material' : []
    },
    'running_cost' : {
      'resource' : [],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : []
    }
  }

//農場
const farm = {
    'name' : '農場',
    'tile_colour' : '#afaf00',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'crop',
          'var' : 20,
        }
      ]
    }
  }

//鉱山
const mine = {
    'name' : '鉱山',
    'tile_colour' : '#212121',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'metal',
          'var' : 20,
        }
      ]
    }
  }

//伐採場
const logging_field = {
    'name' : '伐採場',
    'tile_colour' : '#1f1f0a',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'wood',
          'var' : 10,
        }
      ]
    }
  }

//油田
const oil_field = {
    'name' : '油田',
    'tile_colour' : '#111111',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'oil',
          'var' : 20,
        }
      ]
    }
  }

//井戸
const well = {
    'name' : '井戸',
    'tile_colour' : '#4080ff',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 10,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'water',
          'var' : 10,
        }
      ]
    }
  }


//浄水場
const water_plant = {
    'name' : '浄水場',
    'tile_colour' : '#4080ff',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'chemical',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'water',
          'var' : 20,
        }
      ]
    }
  }

//官邸
const residence = {
    'name' : '官邸',
    'tile_colour' : '#a000f0',
    'building_cost' : {
      'resource' : [],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'authority',
          'var' : 20,
        },
        {
          'type' : 'army',
          'var' : 5,
        }
      ]
    }
  }

//役所
const government_office = {
    'name' : '役所',
    'tile_colour' : '#a000f0',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : []
    },
    'produce' : {
      'resource' : [
        {
          'type' : 'product',
          'var' : 5
        }
      ],
      'material' : [
        {
          'type' : 'authority',
          'var' : 20,
        }
      ]
    }
  }

const house = {
    'name' : '住宅',
    'tile_colour' : '#a0f0a0',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'water',
          'var' : 5,
        },
        {
          'type' : 'chemical',
          'var' : 5,
        },
        {
          'type' : 'production',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 10
        }
      ],
      'material' : [
      ]
    }
  }

//兵器工場
const weapon_factory = {
    'name' : '兵器工場',
    'tile_colour' : '#f02040',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'metal',
          'var' : 5,
        },
        {
          'type' : 'parts',
          'var' : 5,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'weapon',
          'var' : 5,
        }
      ]
    }
  }

//弾薬工場
const ammo_factory = {
    'name' : '弾薬工場',
    'tile_colour' : '#f02040',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'metal',
          'var' : 5,
        },
        {
          'type' : 'parts',
          'var' : 5,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'ammo',
          'var' : 5,
        }
      ]
    }
  }

//薬品工場
const chemical_factory_1 = {
    'name' : '薬品工場',
    'tile_colour' : '#a0a0ff',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'water',
          'var' : 5,
        },
        {
          'type' : 'crop',
          'var' : 5,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'chemical',
          'var' : 5,
        }
      ]
    }
  }

const chemical_factory_2 = {
    'name' : '薬品工場',
    'tile_colour' : '#a0a0ff',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'water',
          'var' : 5,
        },
        {
          'type' : 'oil',
          'var' : 5,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'chemical',
          'var' : 10,
        }
      ]
    }
  }

//燃料工場
const fuel_factory_1 = {
    'name' : '燃料工場',
    'tile_colour' : '#f0a010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'wood',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'fuel',
          'var' : 10,
        }
      ]
    }
  }
const fuel_factory_2 = {
    'name' : '燃料工場',
    'tile_colour' : '#f0a010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'oil',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'fuel',
          'var' : 20,
        }
      ]
    }
  }

//部品工場
const parts_factory_1 = {
    'name' : '部品工場',
    'tile_colour' : '#f0c010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'metal',
          'var' : 5,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'parts',
          'var' : 10,
        }
      ]
    }
  }

const parts_factory_2 = {
    'name' : '部品工場',
    'tile_colour' : '#f0c010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'oil',
          'var' : 10,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'parts',
          'var' : 20,
        }
      ]
    }
  }

//製品工場
const product_factory = {
    'name' : '製品工場',
    'tile_colour' : '#f0c010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'wood',
          'var' : 5,
        },
        {
          'type' : 'metal',
          'var' : 5,
        },        {
          'type' : 'parts',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'product',
          'var' : 10,
        }
      ]
    }
  }

//食品工場
const food_factory = {
    'name' : '食品工場',
    'tile_colour' : '#f0c010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'water',
          'var' : 5,
        },
        {
          'type' : 'crop',
          'var' : 5,
        },
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'food',
          'var' : 10,
        }
      ]
    }
  }

//精製所
const refinery = {
    'name' : '精製所',
    'tile_colour' : '#f0a010',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'oil',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [],
      'material' : [
        {
          'type' : 'chemical',
          'var' : 10,
        },
        {
          'type' : 'fuel',
          'var' : 10,
        }
      ]
    }
  }

//診療所
const hospital = {
    'name' : '診療所',
    'tile_colour' : '#10a0ff',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'chemical',
          'var' : 5,
        },
        {
          'type' : 'parts',
          'var' : 5,
        },
        {
          'type' : 'product',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [
        {
          'type' : 'medical_care',
          'var' : 10
        }
      ],
      'material' : [
      ]
    }
  }

//通信所
const communication_station = {
    'name' : '通信所',
    'tile_colour' : '#10a0ff',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'parts',
          'var' : 5,
        },
        {
          'type' : 'product',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [
        {
          'type' : 'network',
          'var' : 20
        }
      ],
      'material' : [
      ]
    }
  }

//発電所
const power_plant = {
    'name' : '発電所',
    'tile_colour' : '#b08000',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'parts',
          'var' : 5,
        },
        {
          'type' : 'product',
          'var' : 5,
        },
        {
          'type' : 'fuel',
          'var' : 10,
        }
      ]
    },
    'produce' : {
      'resource' : [
        {
          'type' : 'electric_power',
          'var' : 20
        }
      ],
      'material' : [
      ]
    }
  }

//建設所
const construction_center = {
    'name' : '建設所',
    'tile_colour' : '#b08000',
    'building_cost' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 5,
        },
      ],
      'material' : []
    },
    'running_cost' : {
      'resource' : [
        {
          'type' : 'man_power',
          'var' : 5,
        },
        {
          'type' : 'electric_power',
          'var' : 5,
        },
        {
          'type' : 'network',
          'var' : 5,
        }
      ],
      'material' : [
        {
          'type' : 'parts',
          'var' : 5,
        },
        {
          'type' : 'product',
          'var' : 5,
        },
        {
          'type' : 'fuel',
          'var' : 5,
        }
      ]
    },
    'produce' : {
      'resource' : [
        {
          'type' : 'construction_power',
          'var' : 20
        }
      ],
      'material' : [
      ]
    }
  }

const Building_list = {
  'empty' : empty,
  'residence' : residence,
  'government_office' : government_office,
  'house' : house,
  'mine' : mine,
  'well' : well,
  'water_plant' : water_plant,
  'oil_field' : oil_field,
  'farm' : farm,
  'hospital' : hospital,
  'power_plant' : power_plant,
  'communication_station' : communication_station,
  'construction_center' : construction_center,
  'chemical_factory_1' : chemical_factory_1,
  'chemical_factory_2' : chemical_factory_2,
  'parts_factory_1' : parts_factory_1,
  'parts_factory_2' : parts_factory_2,
  'fuel_factory_1' : fuel_factory_1,
  'fuel_factory_2' : fuel_factory_2,
  'product_factory' : product_factory,
  'ammo_factory' : ammo_factory,
  'weapon_factory' : weapon_factory,
  'logging_field' : logging_field
}

class Building{
  constructor(Building_id, system = false) {
    this.efficiency = 1;
    let build_cost = 0;
    for (const goods of Building_list[Building_id]['building_cost']['resource']) {
      if (goods['type'] === 'construction_power'){
        build_cost = goods['var'];
      }
    }
    this.build_cost = build_cost;
    if (system) {
      this.state = build_cost;
    } else {
      this.state = 0;
    }
    this.Building_id = Building_id;
    this.Building_data = Building_list[Building_id];
  }

  showBuilding() {
    return this.Building_id
  }
  showState() {
    let state = 0;
    if (this.state >= this.build_cost) {
      state = 1;
      return state
    }
    return state
  }

  accept(visitor) {
    visitor.visit_building(this);
  }
}


class Tile {
  constructor(x, y, r, id) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.id = id;
    this.Building = new Building('empty');
  }

  drawTile(ctx) {
    drawHex(ctx, this.x, this.y, this.r);
    ctx.fillStyle = '#000';
    ctx.fillText(this.id, this.x, this.y);
    ctx.fillText(this.Building.drawBuilding, this.x, this.y);
  }

  Build(Building) {
    if (Building.Building_id === 'empty' && this.Building.showBuilding() !== 'empty') {
      if (window.confirm("この土地を更地にしますか?")) {
        this.Building = Building;
        return 1;
      }
    }
    if (this.Building.showBuilding() === 'empty') {
      this.Building = Building;
      return 0;
    } else {
      return -1;
    }
  }

  accept(visitor) {
    visitor.visit_tile(this);
  }
}

class Map {
  constructor(w, h, r) {
    this.tiles = [];
    let tile_id = 0;
    const x_step = 1.5 * r
    const y_step = Math.sqrt(3) * r
    for (let i1 = 0; i1 < w / x_step - 1; i1++) {
      let y_lim = h / y_step - ((i1) % 2)
      for (let i2 = 0; i2 < y_lim - 1; i2++) {
        let x = x_step * i1 + r
        let y = y_step * i2 + y_step / (((i1 + 1) % 2) + 1) + 1
        this.tiles.push(new Tile(x, y, r, tile_id));
        tile_id++
      }
    }
  }

  accept(visitor) {
    visitor.visit_map(this)
  }

  Build(tile_id, Building) {
    const tile = this.tiles[tile_id]
    return tile.Build(Building)
  }
}

class draw {
  constructor(ctx, stock_display) {
    this.ctx = ctx;
    this.stock_display = stock_display;
  }
  visit_map(map) {
    let goods_market = Object.assign(resource_flow, stock)
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const tile of map.tiles) {
      tile.accept(this);
    }
    while (this.stock_display.firstChild) {
      this.stock_display.removeChild(this.stock_display.firstChild);
    }
    for (const goods of resource_list.concat(material_list)) {
      let li = document.createElement('li');
      let name = goods_name[goods];
      li.innerHTML = name.concat(':').concat(goods_market[goods]);
      this.stock_display.appendChild(li);
    }
  }

  visit_tile(tile) {
    const tile_state = ['建設中', '稼働中']
    if (select_tile === tile.id) {
      let tile_colour = select_tile_colour;
      drawHex(this.ctx, tile.x, tile.y, tile.r, true, border_colour, tile_colour);
    } else {
      let tile_colour = tile.Building.Building_data['tile_colour'];
      drawHex(this.ctx, tile.x, tile.y, tile.r, true, border_colour, tile_colour);
    }
    this.ctx.textAlign = "center";
    this.ctx.fillStyle = text_colour;
    this.ctx.fillText(tile.id, tile.x, tile.y);
    this.ctx.fillText(Building_list[tile.Building.showBuilding()]['name'], tile.x, tile.y + 10);
    this.ctx.fillText(tile_state[tile.Building.showState()], tile.x, tile.y + 20);
  }
}

class market {
    visit_map(map) {
    this.resource_cost = {
      'medical_care' : 0,
      'electric_power' : 0,
      'man_power' : 0,
      'network' : 0,
      'construction_power' : 0
    }
    this.resource_produce = {
      'medical_care' : 0,
      'electric_power' : 0,
      'man_power' : 0,
      'network' : 0,
      'construction_power' : 0
    }
    this.material_cost = {
      'authority' : 0,
      'metal' : 0,
      'water' : 0,
      'crop' : 0,
      'food' : 0,
      'parts' : 0,
      'product' : 0,
      'chemical' : 0,
      'fuel' : 0,
      'oil' : 0,
      'wood' : 0,
      'army' : 0,
      'weapon' : 0,
      'ammo' : 0
    }
    this.material_produce = {
      'authority' : 0,
      'metal' : 0,
      'water' : 0,
      'crop' : 0,
      'food' : 0,
      'parts' : 0,
      'product' : 0,
      'chemical' : 0,
      'fuel' : 0,
      'oil' : 0,
      'wood' : 0,
      'army' : 0,
      'weapon' : 0,
      'ammo' : 0
    }
    for (const tile of map.tiles) {
      tile.accept(this);
    }
    return [this.resource_cost, this.resource_produce, this.material_cost, this.material_produce];
  }

  visit_tile(tile) {
    tile.Building.accept(this);
  }

  visit_building(building) {
    let parms = building.Building_data;
    let efficiency = Math.min(building.efficiency, 0.1);
    let build_cost = building.build_cost;
    if (building.state < build_cost) {
      for (const goods of parms['building_cost']['resource']) {
        this.resource_cost[goods['type']] += goods['var'] * efficiency;
      }
    }
    if (building.state >= build_cost) {
      for (const goods of parms['running_cost']['resource']) {
        this.resource_cost[goods['type']] += goods['var'] * efficiency;
      }
      for (const goods of parms['running_cost']['material']) {
        this.material_cost[goods['type']] += goods['var'] * efficiency;
      }
      for (const goods of parms['produce']['resource']) {
        this.resource_produce[goods['type']] += goods['var'] * efficiency;
      }
      for (const goods of parms['produce']['material']) {
        this.material_produce[goods['type']] += goods['var'] * efficiency;
      }
    }
  }
}

class building_update {
  visit_map(map) {
    let market_data = new market().visit_map(map);
    this.resource_rate = {
      'medical_care' : 0,
      'electric_power' : 0,
      'man_power' : 0,
      'network' : 0,
      'construction_power' : 0
    }
    this.material_rate = {
      'authority' : 0,
      'metal' : 0,
      'water' : 0,
      'crop' : 0,
      'food' : 0,
      'parts' : 0,
      'product' : 0,
      'chemical' : 0,
      'fuel' : 0,
      'oil' : 0,
      'wood' : 0,
      'army' : 0,
      'weapon' : 0,
      'ammo' : 0
    }
    for (const goods of resource_list) {
      let rate = market_data[0][goods] / market_data[1][goods];
      if (isFinite(rate)) {
        this.resource_rate[goods] = rate;
      }
      resource_flow[goods] = market_data[1][goods] - market_data[0][goods];
    }
    for (const goods of material_list) {
      let rate = (market_data[2][goods] + stock[goods]) / market_data[3][goods]
      if (isFinite(rate)) {
        this.material_rate[goods] = rate;
      }
      let income = (market_data[3][goods] - market_data[2][goods])
      if (isFinite(income) & income > 0) {
        stock[goods] += income;
      }
    }
    for (const tile of map.tiles) {
      tile.accept(this);
    }
  }

  visit_tile(tile) {
    tile.Building.accept(this);
  }

  visit_building(building) {
    let efficiency = 0;
    let rate = 0;

    const parms = building.Building_data;
    efficiency += this.resource_rate['electric_power'] * this.resource_rate['network'];
    
    for (const goods of parms['running_cost']['material']) {
      rate += this.material_rate[goods];
    }
    rate /= parms['running_cost']['material'].length;
    efficiency *= rate;
    building.efficiency = Math.min(building.efficiency, 0.1);
    for (const goods of parms['building_cost']['resource']) {
      if (goods['type'] === 'construction_power'){
        let build_cost = goods['var'];
          if (building.state < build_cost) {
            
            building.state += build_cost * Math.min(building.efficiency, 0.1);
          }
      }
    }
  }
}

class click {
  constructor (input, map) {
    this.input = input;
    if (0 <= input.clientX <= 1280 && 0 <= input.clientY <= 764) {
      switch (this.input.button) {
        case 0:
            select_tile = clicktile(input, map)
          break;
        default:
      }
    }
    delete this;
  }
  visit_map(map) {
    for (const tile of map.tiles) {
      tile.accept(this);
    }
  }
  visit_tile(tile) {
    tile.Building.accept(this);
  }
}

function clicktile(input, map) {
  const click_x = input.clientX;
  const click_y = input.clientY;
  if (input.button === 0) {
    for (const tile of map.tiles) {
      let x = click_x - tile.x;
      let y = click_y - tile.y;
      if (Math.sqrt(x ** 2 + y ** 2) <= tile.r / 2 * Math.sqrt(3) ) {
        return tile.id;
      }
    }
  }
  return -1;
}

class gamelogic {
  visit_map(map) {
    map.accept(new building_update());
  }
}

class building_control {
  constructor (input, map) {
    console.log(input)
    map.Build(select_tile, new Building(input))
  }
}

const stock = {
  'authority' : 0,
  'metal' : 0,
  'water' : 0,
  'crop' : 0,
  'food' : 0,
  'parts' : 0,
  'product' : 0,
  'chemical' : 0,
  'fuel' : 0,
  'oil' : 0,
  'wood' : 0,
  'army' : 0,
  'weapon' : 0,
  'ammo' : 0
}

const resource_flow = {
  'medical_care' : 0,
  'electric_power' : 0,
  'man_power' : 0,
  'network' : 0,
  'construction_power' : 0
}

const resource_list = [
  'medical_care',
  'electric_power',
  'man_power',
  'network',
  'construction_power'
]

const material_list = [
  'authority',
  'metal',
  'water',
  'crop',
  'food',
  'parts',
  'product',
  'chemical',
  'fuel',
  'oil',
  'wood',
  'army',
  'weapon',
  'ammo'
]

const resource_name = {
  'medical_care' : '医療',
  'electric_power' : '電力',
  'man_power' : '労働力',
  'network' : '通信',
  'construction_power' : '建設力',
}

const material_name = {
  'authority' : '権力',
  'metal' : '金属',
  'water' : '水',
  'crop' : '穀物',
  'food' : '食品',
  'parts' : '部品',
  'product' : '製品',
  'chemical' : '薬品',
  'fuel' : '燃料',
  'oil' : '石油',
  'wood' : '木材',
  'army' : '兵士',
  'weapon' : '武器',
  'ammo' : '弾薬',
}

const map = new Map(1280, 764, 40);
map.Build(110, new Building('residence', true));
map.Build(109, new Building('farm', true));
map.Build(111, new Building('mine', true));
map.Build(100, new Building('well', true));
map.Build(120, new Building('logging_field', true));
map.Build(99, new Building('house', true));
map.Build(121, new Building('construction_center', true));
const goods_name = Object.assign(resource_name, material_name);

let select_tile = -1;

const border_colour = '#000';
const text_colour = '#000';
const select_tile_colour = '#79aeee';
const Building_name_list = Object.keys(Building_list);

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('canvas');
  const stock_display = document.getElementById('stock_display');
  const building_menu = document.getElementById('building_menu');
  const notice = document.getElementById('notice');
  const ctx = canvas.getContext('2d');
  const tps = 2;
  const fps = 30;

  building_menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
      console.log(select_tile);
      flag = map.Build(select_tile, new Building(event.target.id, false));
      switch (flag) {
        case 0:
          notice.innerText = '建設を開始しました';
          break
        case 1:
          notice.innerText = '土地を更地にしました';
        case -1:
          notice.innerText = '既に建築物が建っています';
        default:
          console.log('バグが発生しています');
      }
    }
  });

  for (const building of Building_name_list) {
    const building_button = document.createElement('button');
    building_button.innerText = Building_list[building]['name'];
    building_button.id = building;
    building_button.className = 'button';
    building_menu.appendChild(building_button);
  }

  //webglのサポートの確認
  if (!ctx) {
    alert('webglがサポートされていません');
    return;
  };
  const render = new draw(ctx, stock_display)
  const logic = new gamelogic()
  
  canvas.addEventListener("mousedown", (input) => {
    select_tile = clicktile(input, map);
  });
  setInterval(() => map.accept(render), 1000 / fps);
  setInterval(() => map.accept(logic), 1000 / tps);
});