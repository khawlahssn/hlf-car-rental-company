/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * A network participant can return a car to its owner
 * @param {org.car.rental.returnCar} returnTxn sets the status of the requested car to AVAILABLE
 * @transaction
 */

async function returnCar(returnTxn) {
    // get the car registry
    const carRegistry = await getAssetRegistry('org.car.rental.Car');

    // get the car from the car registry using carVIN
    const car = await carRegistry.get(returnTxn.car.vin);

    // change the car status to AVAILABLE
    car.carStatus = "AVAILABLE";

    // set the renterID property 
    car.renterID = "NONE";

    // update the car registry
    await carRegistry.update(car);
}