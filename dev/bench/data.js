window.BENCHMARK_DATA = {
  "lastUpdate": 1656316468781,
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
      }
    ]
  }
}