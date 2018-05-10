
# How to extract Ethereum account's public key using Geth
Added capability to Geth command line:

* New command line swtich ```geth account publickey``` which will print out the account's public key.

## Setup
To build the source code, you need to have go language installed. You can find geth setup instructions for developers at: https://github.com/ethereum/go-ethereum/wiki/Developers'-Guide
 

### Clone the repo
``` 
git clone https://github.com/razi-rais/go-ethereum.git $GOPATH/src/github.com/ethereum/go-ethereum 
```

### Install 
```
cd $GOPATH/src/github.com/ethereum/go-ethereum 
install -v ./cmd/geth 
```

### Run

You may want to run the command with --help switch to get the details. 

```
../../../../bin/geth account publickey --help

publickey [arguments...]

    geth account publickey

Print the public key (in hex format) that is associated with an existing account.
You need to provide account address (in hex), its passphrase, and 
full path to the keyfile.

Note: 
Currently all input parameters need to be provided interactively.
```

To extract the public key, run the command and enter acccount address, its passphrase and the path to 
the keyfile. 

You should see the public key as part of the output. 

```
../../../../bin/geth account publickey 

Address (without 0x): 1217fb994af050cba53b548a59962f230f4dd502

Passphrase: 

Keyfile: /Users/username/Library/Ethereum/keystore/UTC--2018-05-10T00-00-12.051229171Z--1217fb994af050cba53b548a59962f230f4dd502

Public Key: {0432b997682215ff7e475dee52e25f58f98dbd465b2a2a106692cf4099c43badbfd216eb4c0015a9e50c81b178deae83c7f11fb27297e06fac7dd61f7bf0f43b5f} 
```

NOTE: The geth cmd executable is available inside ```/Users/username/go/bin/``` folder.

