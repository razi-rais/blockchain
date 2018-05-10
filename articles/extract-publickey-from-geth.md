
# How to extract Ethereum account's public key using Geth
Added a capability to Geth command line:

* New command line swtich ```geth account publickey``` which will print out the account's public key.

## Setup
To build the source code, you need to have go language installed. You can find geth setup instructions for developers at: https://github.com/ethereum/go-ethereum/wiki/Developers'-Guide

* Clone the repo
``` 
git clone https://github.com/razi-rais/go-ethereum.git $GOPATH/src/github.com/ethereum/go-ethereum 
```

* Install 
```
cd $GOPATH/src/github.com/ethereum/go-ethereum 
install -v ./cmd/geth 
```

* Run

You can run the command with --help switch to get the details. 
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


NOTE: The geth cmd executable is available inside ```/Users/username/go/bin/``` folder.
