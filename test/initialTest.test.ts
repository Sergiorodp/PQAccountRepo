import { server } from "../src/server";
import request from "supertest";
import {describe, expect, test} from '@jest/globals'

describe('test', () => {
    test('first test', () => {
        return request( server )
        .get('/users')
        .expect(200)
        .then(response => {
            expect(response.text).toBeTruthy()
      });
    })
})