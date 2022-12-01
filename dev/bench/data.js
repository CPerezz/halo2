window.BENCHMARK_DATA = {
  "lastUpdate": 1669926732814,
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
      }
    ]
  }
}