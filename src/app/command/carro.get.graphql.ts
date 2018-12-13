import {Query} from 'apollo-angular';
import gql from 'graphql-tag';
import { Query as QueryType } from '../carro';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class GetCarGQL extends Query<QueryType> {
    document = gql`
    query carro($id: Int) {
      carro(id: $id) {
        id
        name            
      }
    }
    `;
  }