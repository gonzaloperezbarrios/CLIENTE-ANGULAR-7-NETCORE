import {Mutation} from 'apollo-angular';
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class UpdateCarGQL extends Mutation {
    document = gql`
      mutation updateCar($update: CarInputUpdate!){
        updateCar(update: $update){
          id
          name
        }
      }
    `;
  }