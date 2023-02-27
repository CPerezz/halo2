window.BENCHMARK_DATA = {
  "lastUpdate": 1677499054428,
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
          "id": "47f2cc83498de27bcf1641e9f2e02e0c86551c7e",
          "message": "Merge pull request #728 from nagatoism/disable-rayon\n\n  Add feature \"multicore\"  and you can disable rayon by disabling the  \"multicore\" feature.",
          "timestamp": "2023-02-14T20:32:28Z",
          "tree_id": "cb509f92f5167939dd6a145ff5db146427fc191c",
          "url": "https://github.com/CPerezz/halo2/commit/47f2cc83498de27bcf1641e9f2e02e0c86551c7e"
        },
        "date": 1677499050029,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 90276208,
            "range": "± 6027992",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4572123,
            "range": "± 409995",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 169176121,
            "range": "± 6090129",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5627213,
            "range": "± 475936",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 229356701,
            "range": "± 4688520",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6461569,
            "range": "± 684174",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 35364,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 140944,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 153301,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 243624,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 246495,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 143878,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 156371,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 246996,
            "range": "± 1103",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 248890,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 301970,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 313771,
            "range": "± 6262",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 406937,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 406906,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 2996198,
            "range": "± 2073",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5858604,
            "range": "± 12151",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10335766,
            "range": "± 109397",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 22946189,
            "range": "± 173836",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 42591049,
            "range": "± 156793",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 83844156,
            "range": "± 124931",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7433,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8733,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 14637,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19374,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 25740,
            "range": "± 2989",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 43501,
            "range": "± 6143",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 97337,
            "range": "± 14596",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 202575,
            "range": "± 33873",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 446802,
            "range": "± 66313",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 846392,
            "range": "± 84782",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1598396,
            "range": "± 101139",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3163493,
            "range": "± 268826",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 6966803,
            "range": "± 507705",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 15300585,
            "range": "± 927704",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 33819645,
            "range": "± 2419775",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 77650872,
            "range": "± 1872974",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28545,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28737,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 153249552,
            "range": "± 1722435",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 329758664,
            "range": "± 2889445",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 716280107,
            "range": "± 6460052",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1516151384,
            "range": "± 4363523",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3244471149,
            "range": "± 9364320",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6915636816,
            "range": "± 17943155",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14734472315,
            "range": "± 22753151",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31290430615,
            "range": "± 70464458",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 66179771806,
            "range": "± 114706687",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 102098165,
            "range": "± 4560243",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 182138396,
            "range": "± 9065838",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 312053580,
            "range": "± 8896705",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 551971953,
            "range": "± 9540018",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1014315542,
            "range": "± 8115014",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1884953326,
            "range": "± 13380402",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3579751413,
            "range": "± 24449698",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6931430265,
            "range": "± 34944332",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13270766588,
            "range": "± 81810888",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5100958,
            "range": "± 152785",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 7950405,
            "range": "± 637430",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12757915,
            "range": "± 670365",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21690865,
            "range": "± 1437453",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37331481,
            "range": "± 1584333",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66611833,
            "range": "± 5734909",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 119736738,
            "range": "± 5003393",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 222089100,
            "range": "± 11931591",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 402791240,
            "range": "± 6202150",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}