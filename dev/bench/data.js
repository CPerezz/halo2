window.BENCHMARK_DATA = {
  "lastUpdate": 1679991376392,
  "repoUrl": "https://github.com/CPerezz/halo2",
  "entries": {
    "halo2 Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ewillbefull@gmail.com",
            "name": "ebfull",
            "username": "ebfull"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "263356784042d7d4c1c17d357c94c1acaeb75ab5",
          "message": "Merge pull request #758 from zcash/release-0.3.0\n\nRelease 0.3.0 of halo2_proofs and halo2_gadgets",
          "timestamp": "2023-03-22T12:32:26-06:00",
          "tree_id": "16087d2e72223f8ad75a504c7125d88b237fc70a",
          "url": "https://github.com/CPerezz/halo2/commit/263356784042d7d4c1c17d357c94c1acaeb75ab5"
        },
        "date": 1679991373196,
        "tool": "cargo",
        "benches": [
          {
            "name": "WIDTH = 3, RATE = 2-prover",
            "value": 90737663,
            "range": "± 9435459",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 3, RATE = 2-verifier",
            "value": 4591000,
            "range": "± 426369",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-prover",
            "value": 167839764,
            "range": "± 4829551",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 9, RATE = 8-verifier",
            "value": 5415383,
            "range": "± 472075",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-prover",
            "value": 226353007,
            "range": "± 5553259",
            "unit": "ns/iter"
          },
          {
            "name": "WIDTH = 12, RATE = 11-verifier",
            "value": 6691722,
            "range": "± 697241",
            "unit": "ns/iter"
          },
          {
            "name": "Poseidon/2-to-1",
            "value": 38910,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/510",
            "value": 141742,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/510",
            "value": 154013,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/510",
            "value": 249706,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/510",
            "value": 249583,
            "range": "± 1382",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/520",
            "value": 144703,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/520",
            "value": 157010,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/520",
            "value": 252462,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/520",
            "value": 252472,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash-to-point/1086",
            "value": 302809,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/hash/1086",
            "value": 315298,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/commit/1086",
            "value": 410548,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "Sinsemilla/short-commit/1086",
            "value": 410665,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "double-and-add",
            "value": 2954595,
            "range": "± 1812",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/14",
            "value": 5849258,
            "range": "± 9971",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/15",
            "value": 10666545,
            "range": "± 82859",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/16",
            "value": 23086572,
            "range": "± 162565",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/17",
            "value": 42890395,
            "range": "± 96360",
            "unit": "ns/iter"
          },
          {
            "name": "dev-lookup/18",
            "value": 83124692,
            "range": "± 91236",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/3",
            "value": 7271,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/4",
            "value": 8831,
            "range": "± 1688",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/5",
            "value": 15112,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/6",
            "value": 19749,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/7",
            "value": 26431,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/8",
            "value": 43043,
            "range": "± 6269",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/9",
            "value": 97819,
            "range": "± 15208",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/10",
            "value": 202863,
            "range": "± 32532",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/11",
            "value": 444719,
            "range": "± 67369",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/12",
            "value": 848182,
            "range": "± 97563",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/13",
            "value": 1603979,
            "range": "± 175520",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/14",
            "value": 3324585,
            "range": "± 293728",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/15",
            "value": 6964710,
            "range": "± 370445",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/16",
            "value": 15348730,
            "range": "± 548639",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/17",
            "value": 34153229,
            "range": "± 716069",
            "unit": "ns/iter"
          },
          {
            "name": "fft/k/18",
            "value": 77327939,
            "range": "± 1151299",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Pallas",
            "value": 28609,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "hash-to-curve/Vesta",
            "value": 28675,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/8",
            "value": 152583298,
            "range": "± 4470538",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/9",
            "value": 325641832,
            "range": "± 3796055",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/10",
            "value": 704944165,
            "range": "± 12121792",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/11",
            "value": 1507464229,
            "range": "± 4631790",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/12",
            "value": 3230964375,
            "range": "± 14669660",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/13",
            "value": 6901759452,
            "range": "± 14835320",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/14",
            "value": 14695023577,
            "range": "± 18380176",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/15",
            "value": 31224227233,
            "range": "± 48179273",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-keygen/16",
            "value": 65967412571,
            "range": "± 42144699",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/8",
            "value": 100029323,
            "range": "± 5195699",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/9",
            "value": 176965997,
            "range": "± 6909979",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/10",
            "value": 312771416,
            "range": "± 5806281",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/11",
            "value": 555624717,
            "range": "± 10110253",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/12",
            "value": 1006049587,
            "range": "± 13954427",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/13",
            "value": 1900075977,
            "range": "± 18389690",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/14",
            "value": 3581721982,
            "range": "± 23085601",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/15",
            "value": 6910810904,
            "range": "± 26291399",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-prover/16",
            "value": 13245698131,
            "range": "± 57073177",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/8",
            "value": 5105605,
            "range": "± 174200",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/9",
            "value": 7929884,
            "range": "± 596166",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/10",
            "value": 12700062,
            "range": "± 944707",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/11",
            "value": 21600408,
            "range": "± 1595230",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/12",
            "value": 37177631,
            "range": "± 2364354",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/13",
            "value": 66653606,
            "range": "± 4529857",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/14",
            "value": 119561214,
            "range": "± 6311737",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/15",
            "value": 220732679,
            "range": "± 14067003",
            "unit": "ns/iter"
          },
          {
            "name": "plonk-verifier/16",
            "value": 409018619,
            "range": "± 6142194",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}