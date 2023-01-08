window.BENCHMARK_DATA = {
  "lastUpdate": 1673181155199,
  "repoUrl": "https://github.com/CPerezz/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96d9bde905a20117b4350ffba0b0a6479aa63f0a",
          "message": "Merge pull request #612 from zcash/batch-crate-feature\n\nPlace `halo2_proofs::plonk::BatchVerifier` behind a (default enabled) crate feature called `batch`.",
          "timestamp": "2022-06-23T20:16:37+01:00",
          "tree_id": "d7405628dd103edb941d0d31fd9d0c39a92f50d8",
          "url": "https://github.com/CPerezz/halo2/commit/96d9bde905a20117b4350ffba0b0a6479aa63f0a"
        },
        "date": 1656316465446,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 79124578,
            "range": "± 2892607",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3412831,
            "range": "± 55473",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 179747358,
            "range": "± 5010984",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4149314,
            "range": "± 62724",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 249485840,
            "range": "± 2688558",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4530893,
            "range": "± 71868",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 47004,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 163153,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 178517,
            "range": "± 1170",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 293991,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 294065,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 166589,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 181959,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 297441,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 297539,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 348441,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 363783,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 479326,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 479545,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3535708,
            "range": "± 1531",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6001433,
            "range": "± 11062",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10598481,
            "range": "± 16049",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 23061755,
            "range": "± 79715",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 42202867,
            "range": "± 140881",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 81161894,
            "range": "± 239763",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7219,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8507,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 15677,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 20646,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 29436,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 49453,
            "range": "± 1024",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 103027,
            "range": "± 7981",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 199643,
            "range": "± 5194",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 409617,
            "range": "± 9417",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 856738,
            "range": "± 31487",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1803013,
            "range": "± 64611",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3822007,
            "range": "± 47790",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 8125466,
            "range": "± 100015",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17458544,
            "range": "± 128513",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 37358791,
            "range": "± 487003",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 83464222,
            "range": "± 1518936",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 34858,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 35025,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 177094868,
            "range": "± 346765",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 380306853,
            "range": "± 862658",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 822639965,
            "range": "± 11550377",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1765040101,
            "range": "± 5977389",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3783354085,
            "range": "± 7185295",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 8091025902,
            "range": "± 16795224",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 17220373908,
            "range": "± 42956976",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 36616130873,
            "range": "± 26060350",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 77501250507,
            "range": "± 248379722",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 110004996,
            "range": "± 494812",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 189124162,
            "range": "± 1701404",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 335695771,
            "range": "± 1320131",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 611288520,
            "range": "± 4458167",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1139945338,
            "range": "± 1858898",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2150911226,
            "range": "± 4994215",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4092682066,
            "range": "± 6511435",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 7890998207,
            "range": "± 13276158",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 15183479509,
            "range": "± 33530294",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5927141,
            "range": "± 64818",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9114143,
            "range": "± 260394",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 14830912,
            "range": "± 464295",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 24933512,
            "range": "± 1279817",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 42845623,
            "range": "± 1119717",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 76510232,
            "range": "± 1608890",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 135816812,
            "range": "± 609943",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 252617636,
            "range": "± 3776024",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 458648554,
            "range": "± 3497137",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6ae9f77e04d471c64b31b86486fb6ae974dc31a1",
          "message": "Merge pull request #678 from nuttycom/fix_clippy_lints\n\nFix beta and nightly clippy complaints",
          "timestamp": "2022-11-30T19:25:54Z",
          "tree_id": "0409f7ac95f5f76648afba66d055446b2dfad4e3",
          "url": "https://github.com/CPerezz/halo2/commit/6ae9f77e04d471c64b31b86486fb6ae974dc31a1"
        },
        "date": 1669926729501,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 80587362,
            "range": "± 4134635",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4168277,
            "range": "± 518746",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 168806325,
            "range": "± 7558867",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5802494,
            "range": "± 656236",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 233359470,
            "range": "± 6447920",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6383186,
            "range": "± 810176",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 53058,
            "range": "± 1907",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 183789,
            "range": "± 6754",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 198064,
            "range": "± 8531",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 325754,
            "range": "± 15609",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 327153,
            "range": "± 31036",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 186746,
            "range": "± 7339",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 202864,
            "range": "± 8520",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 327639,
            "range": "± 14074",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 328323,
            "range": "± 13229",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 389778,
            "range": "± 28353",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 406519,
            "range": "± 10838",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 533191,
            "range": "± 18071",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 527800,
            "range": "± 16066",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3878552,
            "range": "± 120970",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 7792808,
            "range": "± 111194",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 13794538,
            "range": "± 181431",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 30804416,
            "range": "± 738419",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 57607057,
            "range": "± 452822",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 110570711,
            "range": "± 1597256",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 9052,
            "range": "± 1020",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 11034,
            "range": "± 2135",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 18018,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 23585,
            "range": "± 2399",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 33253,
            "range": "± 7122",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 56201,
            "range": "± 13059",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 135928,
            "range": "± 21153",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 277521,
            "range": "± 54515",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 554296,
            "range": "± 73972",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 993942,
            "range": "± 111349",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 2031395,
            "range": "± 191047",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 4535552,
            "range": "± 527305",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 10019622,
            "range": "± 1119187",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 22669455,
            "range": "± 2716959",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 45280510,
            "range": "± 3152799",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 95808915,
            "range": "± 3507954",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 36274,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 36278,
            "range": "± 3699",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 205116930,
            "range": "± 13983814",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 442631869,
            "range": "± 11041990",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 951263477,
            "range": "± 16806320",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 2027196457,
            "range": "± 18496372",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 4325537572,
            "range": "± 23823450",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 9301098660,
            "range": "± 66470417",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 19662631558,
            "range": "± 73516491",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 41861615057,
            "range": "± 312073732",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 88272480114,
            "range": "± 446211846",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 137163571,
            "range": "± 5054913",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 235433541,
            "range": "± 5901689",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 407942045,
            "range": "± 10630008",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 729641543,
            "range": "± 16141123",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1320417299,
            "range": "± 12688879",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2493909281,
            "range": "± 14565503",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4736569442,
            "range": "± 23786079",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 9122286980,
            "range": "± 54230768",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 17498756482,
            "range": "± 86195391",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6812161,
            "range": "± 822976",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 10647108,
            "range": "± 1261268",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 17234163,
            "range": "± 1906437",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 29081201,
            "range": "± 3142982",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 50040035,
            "range": "± 4443518",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 90167242,
            "range": "± 7046139",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 159426855,
            "range": "± 7802231",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 297888872,
            "range": "± 21760108",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 540111200,
            "range": "± 11994292",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7239a02ea34008b8973d742b3e918bbfbc01b75e",
          "message": "Merge pull request #701 from zcash/ff-0.13\n\nMigrate to published `ff 0.13`",
          "timestamp": "2022-12-07T10:21:33Z",
          "tree_id": "990a399f5ef1f3a10a716fd6523b240f8547a695",
          "url": "https://github.com/CPerezz/halo2/commit/7239a02ea34008b8973d742b3e918bbfbc01b75e"
        },
        "date": 1670962546160,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 66602394,
            "range": "± 7234173",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3230248,
            "range": "± 332403",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 134129198,
            "range": "± 4422982",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4460348,
            "range": "± 452702",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 184431532,
            "range": "± 1954529",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 3947364,
            "range": "± 436927",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 39184,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 142235,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 154499,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 250226,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 250241,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 145217,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 157513,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 253116,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 253149,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 304065,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 316269,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 411923,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 411898,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3000138,
            "range": "± 35365",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5969253,
            "range": "± 8127",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10650093,
            "range": "± 40022",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22265284,
            "range": "± 148123",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 43042585,
            "range": "± 203382",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 84371098,
            "range": "± 192401",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7656,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8647,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14565,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19236,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 26048,
            "range": "± 2654",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 41886,
            "range": "± 6119",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 93660,
            "range": "± 13225",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 205787,
            "range": "± 36162",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 414533,
            "range": "± 56496",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 825940,
            "range": "± 95500",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1606248,
            "range": "± 197051",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3155257,
            "range": "± 267428",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 6898187,
            "range": "± 164437",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 15105405,
            "range": "± 1414804",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 35139870,
            "range": "± 1883055",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 78211782,
            "range": "± 1160181",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28467,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28534,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 155169152,
            "range": "± 4650005",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 330128665,
            "range": "± 3622813",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 713519677,
            "range": "± 10060730",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1526853897,
            "range": "± 5934478",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3260655898,
            "range": "± 9618997",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6965643613,
            "range": "± 11315647",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14844176628,
            "range": "± 31061748",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31554815929,
            "range": "± 57373033",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66788399518,
            "range": "± 46734425",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 99855615,
            "range": "± 4582811",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 178745185,
            "range": "± 8931820",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 315110302,
            "range": "± 6689777",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 561972835,
            "range": "± 7407692",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1015099123,
            "range": "± 9032442",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1897042775,
            "range": "± 18792557",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3615662267,
            "range": "± 23531915",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6975055505,
            "range": "± 14465717",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13392897139,
            "range": "± 84409877",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5166711,
            "range": "± 41262",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 7966619,
            "range": "± 564854",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12798921,
            "range": "± 603407",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21622853,
            "range": "± 783198",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37268613,
            "range": "± 2070338",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 67254707,
            "range": "± 4059638",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 120756775,
            "range": "± 6295847",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 228031598,
            "range": "± 12653456",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 411821624,
            "range": "± 6809613",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jack@electriccoin.co",
            "name": "str4d",
            "username": "str4d"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "942b2f84aa4797819ebd5944aa5607decea50c9c",
          "message": "Merge pull request #713 from HollowMan6/main\n\nBook PDF generation",
          "timestamp": "2023-01-06T22:19:14Z",
          "tree_id": "ee3308ea772543112741eb8ce41e8e1abdfe0983",
          "url": "https://github.com/CPerezz/halo2/commit/942b2f84aa4797819ebd5944aa5607decea50c9c"
        },
        "date": 1673181152022,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 70538744,
            "range": "± 4543877",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 3525084,
            "range": "± 376396",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 146424482,
            "range": "± 7866155",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 4288791,
            "range": "± 581934",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 204114707,
            "range": "± 6368730",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 4749613,
            "range": "± 654224",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 41355,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 151825,
            "range": "± 6935",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 169376,
            "range": "± 7244",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 270482,
            "range": "± 10218",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 266713,
            "range": "± 12075",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 159083,
            "range": "± 5666",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 172658,
            "range": "± 8037",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 269670,
            "range": "± 12742",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 269828,
            "range": "± 13518",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 330539,
            "range": "± 18555",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 337762,
            "range": "± 15727",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 450267,
            "range": "± 17961",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 452563,
            "range": "± 14919",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 3353790,
            "range": "± 177730",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 6294795,
            "range": "± 134506",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10953344,
            "range": "± 294672",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 23115555,
            "range": "± 428530",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 44119232,
            "range": "± 1182991",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 86150765,
            "range": "± 2078547",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 8409,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 9805,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 16205,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 20371,
            "range": "± 1367",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 28526,
            "range": "± 2342",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 47350,
            "range": "± 6674",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 111292,
            "range": "± 15477",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 232140,
            "range": "± 42329",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 507198,
            "range": "± 79751",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 911316,
            "range": "± 89439",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1761858,
            "range": "± 309402",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3868312,
            "range": "± 414292",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 7745882,
            "range": "± 269123",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 17316603,
            "range": "± 1161048",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 38334959,
            "range": "± 922351",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 88543535,
            "range": "± 2489504",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 32210,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 31453,
            "range": "± 1286",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 176981042,
            "range": "± 12477516",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 375066192,
            "range": "± 8097889",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 811830449,
            "range": "± 23948412",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1742605716,
            "range": "± 16056179",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3686851983,
            "range": "± 22047761",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 7951190737,
            "range": "± 67734519",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 16842207932,
            "range": "± 91899370",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 35941703004,
            "range": "± 574778448",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 79960154142,
            "range": "± 1143660113",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 127262504,
            "range": "± 4534804",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 221370289,
            "range": "± 5912626",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 377492391,
            "range": "± 9999765",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 670045823,
            "range": "± 14295403",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1212874405,
            "range": "± 16461076",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 2284053153,
            "range": "± 16304612",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 4330115379,
            "range": "± 59614782",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 8926507701,
            "range": "± 83852214",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 17212537504,
            "range": "± 330226049",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 6076305,
            "range": "± 625129",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 9493103,
            "range": "± 860992",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 15097401,
            "range": "± 1106767",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 25806678,
            "range": "± 2191910",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 44789284,
            "range": "± 3795739",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 79708452,
            "range": "± 4615302",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 153151450,
            "range": "± 9280414",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 281130009,
            "range": "± 15607255",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 511381901,
            "range": "± 18065052",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}