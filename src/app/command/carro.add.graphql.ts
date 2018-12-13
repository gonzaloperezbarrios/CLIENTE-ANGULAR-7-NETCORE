import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class AddCarGQL extends Mutation {
    document = gql`
      mutation createCar($car: CarInput!) {
        createCar(car: $car) {
          id
          name
          engine
          model
        }
      }
    `;
  }