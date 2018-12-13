import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class DeleteCarGQL extends Mutation {
    document = gql`
      mutation deleteCar($carId: Int!){
        deleteCar(carId: $carId){
          id   
          name
        }
      }
    `;
  }