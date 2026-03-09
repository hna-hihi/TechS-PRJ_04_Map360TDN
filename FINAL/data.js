var APP_DATA = {
  scenes: [
    {
      id: "0-phongmt",
      name: "PhongMT",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.4056821451178791,
          pitch: 0.972793827963411,
          rotation: 0,
          target: "1-nd_congnd",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-nd_congnd",
      name: "ND_CongND",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.10651255784413038,
          pitch: 0.6750609305790078,
          rotation: 0,
          target: "10-nd_topm",
        },
        {
          yaw: 0.2747293588190942,
          pitch: 0.15304266474313444,
          rotation: 1.5707963267948966,
          target: "0-phongmt",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-nd_midr2",
      name: "ND_MIDR2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.4627767965994991,
          pitch: 1.027411577492927,
          rotation: 0,
          target: "3-nd_downr1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "3-nd_downr1",
      name: "ND_DOWNR1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.201761514814775,
          pitch: 0.8452780635984265,
          rotation: 0,
          target: "7-nd_downm",
        },
        {
          yaw: -2.639215453425013,
          pitch: 0.7313524818190764,
          rotation: 0,
          target: "2-nd_midr2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-nd_midl2",
      name: "ND_MIDL2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.8739629408814604,
          pitch: 0.8419781490567573,
          rotation: 0,
          target: "12-nd_midl",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-nd_downl2",
      name: "ND_DOWNL2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.09866859372299785,
          pitch: 0.7808228689603212,
          rotation: 0,
          target: "12-nd_midl",
        },
        {
          yaw: 1.6761450609712236,
          pitch: 0.7408772143251987,
          rotation: 0,
          target: "6-nd_downl1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "6-nd_downl1",
      name: "ND_DOWNL1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.363096919618183,
          pitch: 0.7555243026066094,
          rotation: 0,
          target: "5-nd_downl2",
        },
        {
          yaw: -1.6672346308299169,
          pitch: 0.7546083458828488,
          rotation: 0,
          target: "7-nd_downm",
        },
        {
          yaw: 2.391535607065798,
          pitch: 0.5616527958784836,
          rotation: 0,
          target: "12-nd_midl",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "7-nd_downm",
      name: "ND_DOWNM",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        yaw: 1.225011503791162,
        pitch: 0.563290651045202,
        fov: 1.426140562602104,
      },
      linkHotspots: [
        {
          yaw: 1.0257315366466244,
          pitch: 0.7314575122651235,
          rotation: 0,
          target: "8-nd_midm",
        },
        {
          yaw: -0.5274396505199146,
          pitch: 0.6600014840890402,
          rotation: 0,
          target: "6-nd_downl1",
        },
        {
          yaw: 2.7324659483758493,
          pitch: 0.8193545285122497,
          rotation: 0,
          target: "3-nd_downr1",
        },
        {
          yaw: -2.219441489086737,
          pitch: 0.7814416444324198,
          rotation: 0,
          target: "4-phonghop1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-nd_midm",
      name: "ND_MIDM",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.05959597396649485,
          pitch: 0.7922747651996396,
          rotation: 0,
          target: "10-nd_topm",
        },
        {
          yaw: 3.0753046180191745,
          pitch: 0.7872490052975571,
          rotation: 0,
          target: "7-nd_downm",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "9-nd_topr",
      name: "ND_TOPR",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.8410575461167262,
          pitch: 0.8646673972591188,
          rotation: 0,
          target: "10-nd_topm",
        },
        {
          yaw: 1.262963479098832,
          pitch: 0.8646673972591188,
          rotation: 0,
          target: "4-c0_stair11",
        },
        {
          yaw: -0.024127490578102595,
          pitch: 0.8646673972591188,
          rotation: 0,
          target: "0-c0_csvc",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "10-nd_topm",
      name: "ND_TOPM",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.910903394299563,
          pitch: 0.8012860972640361,
          rotation: 0,
          target: "1-nd_congnd",
        },
        {
          yaw: 2.7581593600195413,
          pitch: 0.31311314420088543,
          rotation: 10.995574287564278,
          target: "0-phongmt",
        },
        {
          yaw: -1.462963479098832,
          pitch: 0.6307572810805233,
          rotation: 0,
          target: "9-nd_topr",
        },
        {
          yaw: 1.6188480727389907,
          pitch: 0.4191973763039769,
          rotation: 0,
          target: "11-nd_topl",
        },
        {
          yaw: 0.024127490578102595,
          pitch: 0.718523229315668,
          rotation: 0,
          target: "8-nd_midm",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "11-nd_topl",
      name: "ND_TOPL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.38217828307874946,
          pitch: 0.7790875705993763,
          rotation: 0,
          target: "10-nd_topm",
        },
        {
          yaw: -2.7280762659999738,
          pitch: 0.7360230970311878,
          rotation: 0,
          target: "12-nd_midl",
        },
        {
          yaw: -1.4647760783582112,
          pitch: 0.7360230970311878,
          rotation: 0,
          target: "11-d0_phongcongdoan",
        }
      ],
      infoHotspots: [],
    },
    {
      id: "12-nd_midl",
      name: "ND_MIDL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.2947760783582112,
          pitch: 0.5983005115457338,
          rotation: 0,
          target: "11-nd_topl",
        },
        {
          yaw: 1.2349459423610902,
          pitch: 0.6952439209186636,
          rotation: 0,
          target: "5-nd_downl2",
        },
        {
          yaw: -0.29114019614920217,
          pitch: 0.6135955174186432,
          rotation: 0,
          target: "4-nd_midl2",
        },
        {
          yaw: 0.5311026475535883,
          pitch: 0.3949818067028179,
          rotation: 0,
          target: "6-nd_downl1",
        },
        {
          yaw: 2.6498693460984448,
          pitch: 0.7135955174186432,
          rotation: 0,
          target: "0-d0_ht",
        }
      ],
      infoHotspots: [],
    },
    {
      id: "0-kydai",
      name: "KyDai",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.258406284125533,
          pitch: 0.8500167236093041,
          rotation: 0.7853981633974483,
          target: "10-tv_frontr",
        },
        {
          yaw: 3.0741520895551675,
          pitch: 0.8314381594237439,
          rotation: 0,
          target: "13-tv0_stair1",
        },
        {
          yaw: 2.1619360881551657,
          pitch: 0.8268447729925619,
          rotation: 5.497787143782138,
          target: "9-tv_frontl",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-phonggiaovien1",
      name: "PhongGiaoVien1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.7429507375602817,
          pitch: 0.7573311202107256,
          rotation: 1.5707963267948966,
          target: "2-phonggiaovien2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-phonggiaovien2",
      name: "PhongGiaoVien2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.8848529051251752,
          pitch: 0.8424391346072504,
          rotation: 4.71238898038469,
          target: "1-phonggiaovien1",
        },
        {
          yaw: 0.9460761552134009,
          pitch: 0.7878678566483099,
          rotation: 1.5707963267948966,
          target: "4-phonghop1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "3-phonggiaovien3",
      name: "PhongGiaoVien3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "4-phonghop1",
      name: "PhongHop1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.8371657735901294,
          pitch: 0.7717087454267766,
          rotation: 4.71238898038469,
          target: "2-phonggiaovien2",
        },
        {
          yaw: 0.7673781725872697,
          pitch: 0.7717087454267766,
          rotation: 1.5707963267948966,
          target: "5-phonghop2",
        },
        {
          yaw: 2.8717624977635623,
          pitch: 0.7717087454267766,
          rotation: 0,
          target: "7-nd_downm",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-phonghop2",
      name: "PhongHop2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        yaw: 3.1276875579008223,
        pitch: -0.11471939266076703,
        fov: 1.38217411905719,
      },
      linkHotspots: [
        {
          yaw: 2.2107983717328015,
          pitch: 0.7831505188764929,
          rotation: 4.71238898038469,
          target: "4-phonghop1",
        },
        {
          yaw: -2.339632883075751,
          pitch: 0.8864255132772261,
          rotation: 1.5707963267948966,
          target: "7-pht2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "6-phongtiepcongdan",
      name: "PhongTiepCongDan",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        yaw: -0.04819861082761179,
        pitch: 0.03340271631205738,
        fov: 1.38217411905719,
      },
      linkHotspots: [
        {
          yaw: -1.0497763608505046,
          pitch: 0.9232921256102813,
          rotation: 17.27875959474387,
          target: "28-vanphongdoandoi",
        },
        {
          yaw: 2.8724431510575217,
          pitch: 0.8813505773009229,
          rotation: 0,
          target: "9-tv_frontl",
        },
        {
          yaw: 1.074865099143686,
          pitch: 0.8322031000393473,
          rotation: 1.5707963267948966,
          target: "12-tv0_stair",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "7-pht2",
      name: "PHT2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        yaw: 3.093728040244015,
        pitch: -0.05249832492761719,
        fov: 1.38217411905719,
      },
      linkHotspots: [
        {
          yaw: 2.3717624977635623,
          pitch: 0.8627311644473856,
          rotation: 23.561944901923464,
          target: "5-phonghop2",
        },
        {
          yaw: -2.3198074843072476,
          pitch: 0.8448990284397233,
          rotation: 1.5707963267948966,
          target: "28-vanphongdoandoi",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-tv_chilchilr",
      name: "TV_chilchilR",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [],
      infoHotspots: [],
    },
    {
      id: "9-tv_frontl",
      name: "TV_FrontL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.055152035632186625,
          pitch: 0.8331795731330143,
          rotation: 0,
          target: "6-phongtiepcongdan",
        },
        {
          yaw: 1.419459079782797,
          pitch: 0.7778181213753292,
          rotation: 0,
          target: "0-kydai",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "10-tv_frontr",
      name: "TV_FrontR",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.6415356530097007,
          pitch: 0.7612460224810977,
          rotation: 0,
          target: "0-kydai",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "11-tv0_stairr",
      name: "TV0_StairR",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.4802846605365554,
          pitch: 0.8188447247535997,
          rotation: 0,
          target: "13-tv0_stair1",
        },
        {
          yaw: 3.0448686326728334,
          pitch: 0.6446970619217272,
          rotation: 0,
          target: "24-tv1_stairr2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "12-tv0_stair",
      name: "TV0_Stair",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.5441307537450575,
          pitch: 0.803843345292524,
          rotation: 0,
          target: "6-phongtiepcongdan",
        },
        {
          yaw: 0.04043086705757304,
          pitch: 0.7295879244080403,
          rotation: 0,
          target: "13-tv0_stair1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "13-tv0_stair1",
      name: "TV0_Stair1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.0978796088626535,
          pitch: 0.9145875401794008,
          rotation: 0,
          target: "12-tv0_stair",
        },
        {
          yaw: -0.07494642648897099,
          pitch: 0.8480022133981571,
          rotation: 0,
          target: "0-kydai",
        },
        {
          yaw: -1.6773860010990944,
          pitch: 0.8561529925702516,
          rotation: 0,
          target: "11-tv0_stairr",
        },
        {
          yaw: 1.6042214989796397,
          pitch: 0.9080165652848944,
          rotation: 0,
          target: "22-tv0_stairl",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "14-tv1_caunoil",
      name: "TV1_CauNoiL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.6037931863346984,
          pitch: 0.8608193040702812,
          rotation: 0.7853981633974483,
          target: "15-tv1_hanhlang1",
        },
        {
          yaw: -0.4139810585565584,
          pitch: 0.9387306201160577,
          rotation: 5.497787143782138,
          target: "16-tv1_hanhlang2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "15-tv1_hanhlang1",
      name: "TV1_Hanhlang1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.004559040306821416,
          pitch: 0.7382946047999486,
          rotation: 0,
          target: "16-tv1_hanhlang2",
        },
        {
          yaw: 1.5389696817067042,
          pitch: 0.7843136899355034,
          rotation: 0,
          target: "23-tv1_stairl2",
        },
        {
          yaw: -0.5708897167661924,
          pitch: 0.7774732497352321,
          rotation: 5.497787143782138,
          target: "14-tv1_caunoil",
        },
        {
          yaw: -1.8413624978691168,
          pitch: 0.8548567722626679,
          rotation: 0,
          target: "20-tv1_linhtinh",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "16-tv1_hanhlang2",
      name: "TV1_HanhLang2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.6705627061444819,
          pitch: 0.8007853743703173,
          rotation: 0,
          target: "17-tv1_hanhlang3",
        },
        {
          yaw: -0.05284375417696552,
          pitch: 0.7785495796570494,
          rotation: 0,
          target: "15-tv1_hanhlang1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "17-tv1_hanhlang3",
      name: "TV1_HanhLang3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.5678784314355632,
          pitch: 0.7447796509070752,
          rotation: 0,
          target: "18-tv1_hanhlang4",
        },
        {
          yaw: -1.6388783710115877,
          pitch: 0.7610584845887178,
          rotation: 0,
          target: "16-tv1_hanhlang2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "18-tv1_hanhlang4",
      name: "TV1_HanhLang4",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.08877136724178492,
          pitch: 0.859353408292451,
          rotation: 0,
          target: "19-tv1_hanhlang5",
        },
        {
          yaw: 1.567783945301712,
          pitch: 0.8196356023629576,
          rotation: 0,
          target: "17-tv1_hanhlang3",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "19-tv1_hanhlang5",
      name: "TV1_HanhLang5",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.1052043284684316,
          pitch: 0.703763903453142,
          rotation: 0,
          target: "24-tv1_stairr2",
        },
        {
          yaw: -1.6582017962337954,
          pitch: 0.6675907802409586,
          rotation: 0,
          target: "18-tv1_hanhlang4",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "20-tv1_linhtinh",
      name: "TV1_linhtinh",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.2342629304391686,
          pitch: 0.4273343666084024,
          rotation: 0,
          target: "15-tv1_hanhlang1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "21-tv1_stair",
      name: "TV1_Stair",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        yaw: 3.0928871638911852,
        pitch: -0.05537942731446854,
        fov: 1.38217411905719,
      },
      linkHotspots: [
        {
          yaw: -1.6312903354336417,
          pitch: 0.824701444363459,
          rotation: 0,
          target: "23-tv1_stairl2",
        },
        {
          yaw: 1.568469922535007,
          pitch: 0.8786048809736293,
          rotation: 0,
          target: "24-tv1_stairr2",
        },
        {
          yaw: 2.586032123693034,
          pitch: 0.6886434979722367,
          rotation: 0,
          target: "25-tv2_stair1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "22-tv0_stairl",
      name: "TV0_StairL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.4764706366158702,
          pitch: 0.8063608005884539,
          rotation: 0,
          target: "13-tv0_stair1",
        },
        {
          yaw: -0.05625653581086354,
          pitch: 0.6296141667161663,
          rotation: 0,
          target: "23-tv1_stairl2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "23-tv1_stairl2",
      name: "TV1_StairL2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.018258024646494064,
          pitch: 0.7190686961305044,
          rotation: 0,
          target: "22-tv0_stairl",
        },
        {
          yaw: -1.6191741727418503,
          pitch: 0.8231404389867052,
          rotation: 0,
          target: "21-tv1_stair",
        },
        {
          yaw: 1.6155044781713048,
          pitch: 0.7723833083115785,
          rotation: 0,
          target: "15-tv1_hanhlang1",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "24-tv1_stairr2",
      name: "TV1_StairR2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        yaw: -3.1245236460270736,
        pitch: 0.3770355531248164,
        fov: 1.38217411905719,
      },
      linkHotspots: [
        {
          yaw: -3.022406410093005,
          pitch: 0.758067788670429,
          rotation: 0,
          target: "11-tv0_stairr",
        },
        {
          yaw: -1.4066329931826793,
          pitch: 0.8323438119156599,
          rotation: 0,
          target: "21-tv1_stair",
        },
        {
          yaw: 1.544247170438755,
          pitch: 0.791862900604837,
          rotation: 0,
          target: "19-tv1_hanhlang5",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "25-tv2_stair1",
      name: "TV2_Stair1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        yaw: -2.9403044063405535,
        pitch: 0.07142228023532837,
        fov: 1.38217411905719,
      },
      linkHotspots: [
        {
          yaw: -2.988862905091107,
          pitch: 0.7269044740729687,
          rotation: 0,
          target: "21-tv1_stair",
        },
        {
          yaw: -1.4412858345939394,
          pitch: 0.8108637946632236,
          rotation: 0,
          target: "26-tv2_stair2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "26-tv2_stair2",
      name: "TV2_Stair2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.6946823950391483,
          pitch: 0.8161809027787061,
          rotation: 0,
          target: "25-tv2_stair1",
        },
        {
          yaw: -0.07970943303133993,
          pitch: 0.7830167677200102,
          rotation: 0,
          target: "27-tv2_stair3",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "27-tv2_stair3",
      name: "TV2_Stair3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.9326109870661305,
          pitch: 1.1542782121736437,
          rotation: 0,
          target: "26-tv2_stair2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "28-vanphongdoandoi",
      name: "VanPhongDoanDoi",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.8791279309794149,
          pitch: 0.8158349967317733,
          rotation: 1.5707963267948966,
          target: "6-phongtiepcongdan",
        },
        {
          yaw: -0.8459692272504782,
          pitch: 0.8423297388265354,
          rotation: 5.497787143782138,
          target: "7-pht2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "0-c0_csvc",
      name: "C0_Csvc",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.7706026515218269,
          pitch: 0.8003928868505881,
          rotation: 0.7853981633974483,
          target: "6-c0_thuquy",
        },
        {
          yaw: 2.7504414894197378,
          pitch: 0.8003928868505881,
          rotation: 0,
          target: "9-nd_topr",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-c0_kthc",
      name: "C0_KTHC",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.7016315373591944,
          pitch: 0.8639913715056178,
          rotation: 5.497787143782138,
          target: "6-c0_thuquy",
        },
        {
          yaw: 0.8501787047282328,
          pitch: 0.7423016237107554,
          rotation: 0.7853981633974483,
          target: "3-c0_pht",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-c0_phonggiaovu",
      name: "C0_PhongGiaoVu",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.6590185299070974,
          pitch: 0.7604646593513475,
          rotation: 0,
          target: "4-c0_stair11",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "3-c0_pht",
      name: "C0_PHT",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.6800759352745658,
          pitch: 0.8395285472854717,
          rotation: 5.497787143782138,
          target: "1-c0_kthc",
        },
        {
          yaw: 2.0220535333970435,
          pitch: 0.7828020777873839,
          rotation: 6.283185307179586,
          target: "4-c0_stair11",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-c0_stair11",
      name: "C0_stair1(1)",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.5340274426634846,
          pitch: 0.7623896973716668,
          rotation: 0,
          target: "3-c0_pht",
        },
        {
          yaw: -0.022996586224550697,
          pitch: 0.7680027797639255,
          rotation: 0,
          target: "5-c0_stair1",
        },
        {
          yaw: 1.54449792426899,
          pitch: 0.7277763121584044,
          rotation: 0,
          target: "2-c0_phonggiaovu",
        },
        {
          yaw: 3.9874414894197378,
          pitch: 0.7980027797639255,
          rotation: 0,
          target: "9-nd_topr",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-c0_stair1",
      name: "C0_Stair1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.1525352133456579,
          pitch: 0.8530862943331847,
          rotation: 0,
          target: "4-c0_stair11",
        },
        {
          yaw: -1.1094519873572466,
          pitch: 0.7539583430644612,
          rotation: 0.7853981633974483,
          target: "15-c1_stair",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "6-c0_thuquy",
      name: "C0_Thuquy",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.6536318479792804,
          pitch: 0.7536969693349711,
          rotation: 5.497787143782138,
          target: "0-c0_csvc",
        },
        {
          yaw: 0.6869350327577681,
          pitch: 0.7063459566158947,
          rotation: 0.7853981633974483,
          target: "1-c0_kthc",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "7-c1_hanhlang2",
      name: "C1_Hanhlang2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.05008966334125731,
          pitch: 0.788263772669195,
          rotation: 0,
          target: "15-c1_stair",
        },
        {
          yaw: -1.5070051347817301,
          pitch: 0.7496108527012169,
          rotation: 0,
          target: "9-c1_hanhlangl2",
        },
        {
          yaw: 1.5701707855741285,
          pitch: 0.7875995165399097,
          rotation: 0,
          target: "11-c1_hanhlangr2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-c1_hanhlangl",
      name: "C1_HanhLangL",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.8922583347432322,
          pitch: 0.6798398988098295,
          rotation: 0.7853981633974483,
          target: "13-c1_linhtinh2",
        },
        {
          yaw: 1.2705335967908518,
          pitch: 0.7487541851529507,
          rotation: 0,
          target: "15-c1_stair",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "9-c1_hanhlangl2",
      name: "C1_HanhLangL2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.8431803702519645,
          pitch: 0.7523488972682735,
          rotation: 0,
          target: "7-c1_hanhlang2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "10-c1_hanhlangr",
      name: "C1_HanhLangR",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.5182248140168753,
          pitch: 0.7450128675717202,
          rotation: 0,
          target: "15-c1_stair",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "11-c1_hanhlangr2",
      name: "C1_HanhLangR2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.4502542059451962,
          pitch: 0.8650325681949322,
          rotation: 0,
          target: "7-c1_hanhlang2",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "12-c1_linhtinh1",
      name: "C1_linhtinh1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.068842147273285,
          pitch: 1.1151353806610782,
          rotation: 0,
          target: "15-c1_stair",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "13-c1_linhtinh2",
      name: "C1_linhtinh2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.8198693460984448,
          pitch: 0.7210327872558224,
          rotation: 5.497787143782138,
          target: "8-c1_hanhlangl",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "14-c1_linhtinh3",
      name: "C1_linhtinh3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.734583966952318,
          pitch: 0.9545997167826066,
          rotation: 0.7853981633974483,
          target: "15-c1_stair",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "15-c1_stair",
      name: "C1_Stair",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
        {
          tileSize: 512,
          size: 4096,
        },
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.1241215329666936,
          pitch: 0.8945073124440164,
          rotation: 0,
          target: "5-c0_stair1",
        },
        {
          yaw: -2.4776622598422353,
          pitch: 0.851534979267031,
          rotation: 6.283185307179586,
          target: "7-c1_hanhlang2",
        },
        {
          yaw: -1.2341613500721778,
          pitch: 0.9722229163259435,
          rotation: 5.497787143782138,
          target: "14-c1_linhtinh3",
        },
        {
          yaw: -0.0766967564210379,
          pitch: 0.7459389213368226,
          rotation: 0,
          target: "12-c1_linhtinh1",
        },
        {
          yaw: -0.5793240307931669,
          pitch: 0.7171954814003758,
          rotation: 5.497787143782138,
          target: "8-c1_hanhlangl",
        },
        {
          yaw: 0.4018989995910722,
          pitch: 0.7142037602372984,
          rotation: 0.7853981633974483,
          target: "10-c1_hanhlangr",
        },
      ],
      infoHotspots: [],
    },
        {
      id: "0-d0_ht",
      name: "D0_HT",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.4694048296377442,
          pitch: 0.9616143263164183,
          rotation: 0,
          target: "5-d0_pvt3"
        },
        {
          yaw: 1.5085919510397403,
          pitch: 0.9844746852389239,
          rotation: 0,
          target: "7-d0_lab"
        },
        {
          yaw: 3.0354414894197378,
          pitch: 0.7980027797639255,
          rotation: 0,
          target: "12-nd_midl"
        }
      ],
      infoHotspots: []
    },
    {
      id: "1-d0_pvt2",
      name: "D0_PVT2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.6285386354255333,
          pitch: 0.678036728973245,
          rotation: 0,
          target: "8-d0_pvt1"
        },
        {
          yaw: 1.4172222544931437,
          pitch: 0.7615511273631128,
          rotation: 0,
          target: "5-d0_pvt3"
        }
      ],
      infoHotspots: []
    },
    {
      id: "2-ptnsinh",
      name: "PTNSinh",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.4409185935778712,
          pitch: 0.9982603486658732,
          rotation: 0,
          target: "6-ptnhoa"
        }
      ],
      infoHotspots: []
    },
    {
      id: "3-quanlyhocsinh",
      name: "QuanLyHocSInh",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.3875993906474342,
          pitch: 1.019620876755365,
          rotation: 0,
          target: "4-bantrud4"
        },
        {
          yaw: -1.8784831377658548,
          pitch: 1.057142280744614,
          rotation: 0,
          target: "8-d0_pvt1"
        },
        {
          yaw: -2.238916173242929,
          pitch: 0.3446410242555231,
          rotation: 4.71238898038469,
          target: "22-d0_stair1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "4-bantrud4",
      name: "BanTruD4",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.6559810787649951,
          pitch: 0.9838855922359215,
          rotation: 0,
          target: "6-ptnhoa"
        },
        {
          yaw: 1.5091781594464777,
          pitch: 0.9131527930613252,
          rotation: 0,
          target: "3-quanlyhocsinh"
        }
      ],
      infoHotspots: []
    },
    {
      id: "5-d0_pvt3",
      name: "D0_PVT3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.5965447269923239,
          pitch: 0.7674812529381825,
          rotation: 0,
          target: "1-d0_pvt2"
        },
        {
          yaw: 1.4390131845277967,
          pitch: 0.7183752583725465,
          rotation: 0,
          target: "0-d0_ht"
        }
      ],
      infoHotspots: []
    },
    {
      id: "6-ptnhoa",
      name: "PTNHoa",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.5975503429197708,
          pitch: 0.8933162528262919,
          rotation: 0,
          target: "4-bantrud4"
        },
        {
          yaw: -1.5815280235822922,
          pitch: 1.0280890585395532,
          rotation: 0,
          target: "2-ptnsinh"
        }
      ],
      infoHotspots: []
    },
    {
      id: "7-d0_lab",
      name: "D0_LAB",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.6272907890064587,
          pitch: 0.7762570931761488,
          rotation: 0,
          target: "0-d0_ht"
        },
        {
          yaw: 1.3472887441791315,
          pitch: 0.6938654009317702,
          rotation: 0,
          target: "11-d0_phongcongdoan"
        }
      ],
      infoHotspots: []
    },
    {
      id: "8-d0_pvt1",
      name: "D0_PVT1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        },
        {
          tileSize: 512,
          size: 4096
        }
      ],
      faceSize: 2976,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.5095772479493057,
          pitch: 0.7549631979419242,
          rotation: 0,
          target: "3-quanlyhocsinh"
        },
        {
          yaw: 1.5322805246628821,
          pitch: 0.7318185230054937,
          rotation: 0,
          target: "1-d0_pvt2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "9-d1_hanhlang1",
      name: "D1_HanhLang1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -2.37028400881972,
          pitch: 0.5214334717240874,
          rotation: 6.283185307179586,
          target: "22-d0_stair1"
        },
        {
          yaw: 1.5321062470534494,
          pitch: 0.7888693289334654,
          rotation: 0,
          target: "24-d1_hanhlang2"
        },
        {
          yaw: -3.1273988496817466,
          pitch: 0.6351199674180261,
          rotation: 0,
          target: "12-d1_hanhlang3"
        },
        {
          yaw: -0.8987348424672739,
          pitch: 0.7472992881169667,
          rotation: 7.0685834705770345,
          target: "13-d1_linhtinh1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "10-d2_stair2",
      name: "D2_Stair2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 2.1612377932636306,
          pitch: 0.598719745528637,
          rotation: 1.5707963267948966,
          target: "26-d2_hanhlang1"
        },
        {
          yaw: -1.9915579493606739,
          pitch: 0.43793535589632526,
          rotation: 0,
          target: "19-d2_hanhlang2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "11-d0_phongcongdoan",
      name: "D0_PhongCongDoan",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.6304622544518903,
          pitch: 0.836151669740568,
          rotation: 0,
          target: "7-d0_lab"
        },
        {
          yaw: 1.4550819960139618,
          pitch: 0.9068061680040582,
          rotation: 0,
          target: "23-d0_thinghiemly"
        },
        {
          yaw: 2.8198693460984448,
          pitch: 0.9068061680040582,
          rotation: 0,
          target: "11-nd_topl"
        }
      ],
      infoHotspots: []
    },
    {
      id: "12-d1_hanhlang3",
      name: "D1_HanhLang3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -0.7660995332872425,
          pitch: 0.513901210977032,
          rotation: 6.283185307179586,
          target: "9-d1_hanhlang1"
        },
        {
          yaw: -1.9195385216891374,
          pitch: 0.6292306564635783,
          rotation: 4.71238898038469,
          target: "16-d1_bantru1"
        },
        {
          yaw: 0.007686725464528976,
          pitch: 0.8724594762357061,
          rotation: 0,
          target: "17-d1_stair1"
        },
        {
          yaw: -1.5041746665169384,
          pitch: 0.5494031568415849,
          rotation: 0,
          target: "10-d2_stair2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "13-d1_linhtinh1",
      name: "D1_linhtinh1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 2.0191121604955615,
          pitch: 0.5699024512200683,
          rotation: 12.566370614359176,
          target: "9-d1_hanhlang1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "14-d1_stair2",
      name: "D1_Stair2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -0.18203708934300167,
          pitch: 0.220691568288661,
          rotation: 18.84955592153877,
          target: "25-d1_linhtinh2"
        },
        {
          yaw: 2.017684637107668,
          pitch: 0.5676596260171873,
          rotation: 12.566370614359176,
          target: "24-d1_hanhlang2"
        },
        {
          yaw: 1.1654816376216175,
          pitch: 0.6975023049085731,
          rotation: 5.497787143782138,
          target: "17-d1_stair1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "15-d2_linhtinh2",
      name: "D2_linhtinh2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 2.991953037788466,
          pitch: 1.0535342804080585,
          rotation: 0,
          target: "19-d2_hanhlang2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "16-d1_bantru1",
      name: "D1_BanTru1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.516715912399297,
          pitch: 0.8676144740760456,
          rotation: 0,
          target: "12-d1_hanhlang3"
        }
      ],
      infoHotspots: []
    },
    {
      id: "17-d1_stair1",
      name: "D1_Stair1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.6325763321532136,
          pitch: 0.7622301442760726,
          rotation: 0,
          target: "12-d1_hanhlang3"
        },
        {
          yaw: -0.3981047707837533,
          pitch: 0.7406725037670832,
          rotation: 6.283185307179586,
          target: "14-d1_stair2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "18-d2_hanglang1",
      name: "D2_HangLang1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [],
      infoHotspots: []
    },
    {
      id: "19-d2_hanhlang2",
      name: "D2_HanhLang2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.6226574483078613,
          pitch: 0.7127630943834902,
          rotation: 0,
          target: "10-d2_stair2"
        },
        {
          yaw: -3.1129489068829486,
          pitch: 0.5095159368970457,
          rotation: 0,
          target: "20-d2_hanhlang3"
        },
        {
          yaw: -2.0769976441521916,
          pitch: 0.6714843081866917,
          rotation: 0,
          target: "15-d2_linhtinh2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "20-d2_hanhlang3",
      name: "D2_HanhLang3",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.6606606023929498,
          pitch: 0.7133093532828756,
          rotation: 0,
          target: "19-d2_hanhlang2"
        },
        {
          yaw: 1.440868076714044,
          pitch: 0.3394576400291207,
          rotation: 11.780972450961727,
          target: "21-d2_linhtinh1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "21-d2_linhtinh1",
      name: "D2_linhtinh1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [],
      infoHotspots: []
    },
    {
      id: "22-d0_stair1",
      name: "D0_Stair1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 0.005709711188222499,
          pitch: 0.9706420253667005,
          rotation: 0,
          target: "3-quanlyhocsinh"
        },
        {
          yaw: -3.1241520559839024,
          pitch: 0.43738301826728687,
          rotation: 0,
          target: "9-d1_hanhlang1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "23-d0_thinghiemly",
      name: "D0_ThiNghiemLy",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: -1.5981786593267095,
          pitch: 0.7894219565749836,
          rotation: 0,
          target: "11-d0_phongcongdoan"
        }
      ],
      infoHotspots: []
    },
    {
      id: "24-d1_hanhlang2",
      name: "D1_HanhLang2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 1.6412079675444184,
          pitch: 0.7503493591173047,
          rotation: 0,
          target: "9-d1_hanhlang1"
        },
        {
          yaw: -1.546914350161746,
          pitch: 0.7891480272517803,
          rotation: 0,
          target: "14-d1_stair2"
        }
      ],
      infoHotspots: []
    },
    {
      id: "25-d1_linhtinh2",
      name: "D1_linhtinh2",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        yaw: -0.017363562948899514,
        pitch: -1.0763041681195915,
        fov: 1.353261692243421
      },
      linkHotspots: [
        {
          yaw: 3.0912743152702316,
          pitch: 0.8661477053665365,
          rotation: 0,
          target: "14-d1_stair2"
        },
        {
          yaw: 0.7488671430001617,
          pitch: 0.4982055447510678,
          rotation: 0,
          target: "17-d1_stair1"
        }
      ],
      infoHotspots: []
    },
    {
      id: "26-d2_hanhlang1",
      name: "D2_HanhLang1",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true
        },
        {
          tileSize: 512,
          size: 512
        },
        {
          tileSize: 512,
          size: 1024
        },
        {
          tileSize: 512,
          size: 2048
        }
      ],
      faceSize: 2000,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966
      },
      linkHotspots: [
        {
          yaw: 2.8941282907435575,
          pitch: 1.3246626698745239,
          rotation: 0,
          target: "10-d2_stair2"
        }
      ],
      infoHotspots: []
    }

  ],
  name: "Project Title",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: true,
    fullscreenButton: false,
    viewControlButtons: false,
  },
};
