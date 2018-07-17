# Example: Date of Birth (Over 21 years)

* Create ageOver21.code file by running following instruction:
``` 
cat <<EOF >ageOver21.code 
```

* Paste the code below, then type ```EOF``` and press ENTER.
-------------------------------------------------------------------

```
def main(pubName,private yearOfBirth, private centuryOfBirth):
  x = 0
  y = 0
  z = 0
  x = if centuryOfBirth == 19 then 1 else 0 fi
  y = if yearOfBirth < 98 then 1 else 0 fi
  z = if pubName == 8297122105 then 1 else 0 fi
  total =  x + y + z 
  result = if total == 3 then 1 else 0 fi
  
  return result 
```
-------------------------------------------------------------------
 Note: Razi = 8297122105. Covert text to decimal using the website: https://cryptii.com/decimal-text

# Create ageOver21.code file
cat <<EOF >ageOver21.code


#Commands:

./target/release/zokrates compile -i ageOver21.code 
./target/release/zokrates setup
./target/release/zokrates export-verifier
./target/release/zokrates compute-witness -a 8297122105 97 19
./target/release/zokrates generate-proof


#Proof
A = Pairing.G1Point(0x24cdd31f8e07e854e859aa92c6e7f761bab31b4a871054a82dc01c143bc424d, 0x1eaed5314007d283486826e9e6b369b0f1218d7930cced0dd0e735d3702877ac);
A_p = Pairing.G1Point(0x1d5c046b83c204766f7d7343c76aa882309e6663b0563e43b622d0509ac8e96e, 0x180834d1ec2cd88613384076e953cfd88448920eb9a965ba9ca2a5ec90713dbc);
B = Pairing.G2Point([0x1b51d6b5c411ec0306580277720a9c02aafc9197edbceea5de1079283f6b09dc, 0x294757db1d0614aae0e857df2af60a252aa7b2c6f50b1d0a651c28c4da4a618e], [0x218241f97a8ff1f6f90698ad0a4d11d68956a19410e7d64d4ff8362aa6506bd4, 0x2ddd84d44c16d893800ab5cc05a8d636b84cf9d59499023c6002316851ea5bae]);
B_p = Pairing.G1Point(0x7647a9bf2b6b2fe40f6f0c0670cdb82dc0f42ab6b94fd8a89cf71f6220ce34a, 0x15c5e69bafe69b4a4b50be9adb2d72d23d1aa747d81f4f7835479f79e25dc31c);
C = Pairing.G1Point(0x2dc212a0e81658a83137a1c73ac56d94cb003d05fd63ae8fc4c63c4a369f411c, 0x26dca803604ccc9e24a1af3f9525575e4cc7fbbc3af1697acfc82b534f695a58);
C_p = Pairing.G1Point(0x7eb9c5a93b528559c9b98b1a91724462d07ca5fadbef4a48a36b56affa6489e, 0x1c4e24d15c3e2152284a2042e06cbbff91d3abc71ad82a38b8f3324e7e31f00);
H = Pairing.G1Point(0x1dbeb10800f01c2ad849b3eeb4ee3a69113bc8988130827f1f5c7cf5316960c5, 0xc935d173d13a253478b0a5d7b5e232abc787a4a66a72439cd80c2041c7d18e8);
K = Pairing.G1Point(0x28a0c6fff79ce221fccd5b9a5be9af7d82398efa779692297de974513d2b6ed1, 0x15b807eedf551b366a5a63aad5ab6f2ec47b2e26c4210fe67687f26dbcc7434d);

#Remix
["0x24cdd31f8e07e854e859aa92c6e7f761bab31b4a871054a82dc01c143bc424d", "0x1eaed5314007d283486826e9e6b369b0f1218d7930cced0dd0e735d3702877ac"],
["0x1d5c046b83c204766f7d7343c76aa882309e6663b0563e43b622d0509ac8e96e", "0x180834d1ec2cd88613384076e953cfd88448920eb9a965ba9ca2a5ec90713dbc"],
[["0x1b51d6b5c411ec0306580277720a9c02aafc9197edbceea5de1079283f6b09dc", "0x294757db1d0614aae0e857df2af60a252aa7b2c6f50b1d0a651c28c4da4a618e"], ["0x218241f97a8ff1f6f90698ad0a4d11d68956a19410e7d64d4ff8362aa6506bd4", "0x2ddd84d44c16d893800ab5cc05a8d636b84cf9d59499023c6002316851ea5bae"]],
["0x7647a9bf2b6b2fe40f6f0c0670cdb82dc0f42ab6b94fd8a89cf71f6220ce34a", "0x15c5e69bafe69b4a4b50be9adb2d72d23d1aa747d81f4f7835479f79e25dc31c"],
["0x2dc212a0e81658a83137a1c73ac56d94cb003d05fd63ae8fc4c63c4a369f411c", "0x26dca803604ccc9e24a1af3f9525575e4cc7fbbc3af1697acfc82b534f695a58"],
["0x7eb9c5a93b528559c9b98b1a91724462d07ca5fadbef4a48a36b56affa6489e", "0x1c4e24d15c3e2152284a2042e06cbbff91d3abc71ad82a38b8f3324e7e31f00"],
["0x1dbeb10800f01c2ad849b3eeb4ee3a69113bc8988130827f1f5c7cf5316960c5", "0xc935d173d13a253478b0a5d7b5e232abc787a4a66a72439cd80c2041c7d18e8"],
["0x28a0c6fff79ce221fccd5b9a5be9af7d82398efa779692297de974513d2b6ed1", "0x15b807eedf551b366a5a63aad5ab6f2ec47b2e26c4210fe67687f26dbcc7434d"],
[8297122105,1]
