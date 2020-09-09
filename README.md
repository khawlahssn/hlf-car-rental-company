car-rental-network project description:

Provide a trustworthy platform for renting cars using Blockchain Technology.

Note:

1. This project serves as an introduction to building blockchain applications. 
2. Please use the code along with the manual created for the workshop.


# To create a skeleton network using Yeoman generator:

yo hyperledger-composer:businessnetwork

# To package BND into a BNA file:

cd car-rental-network

composer archive create -t dir -n .

# To create the PeerAdmin card:

cd ..

./createPeerAdminCard.sh

# To install the network to fabric:

cd car-rental-network

composer network install --card PeerAdmin@hlfv1 --archiveFile car-rental-network@0.0.1.bna

# To start the network:

composer network start --networkName car-rental-network --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

# To import the network administrator identity as a usable network card:

composer card import --file networkadmin.card

# To check that the business network has been deployed successfully:

composer network ping --card admin@car-rental-network

# To generate a REST API based on our network:

composer-rest-server
