import fse from 'fs-extra';
import os from 'os';
import Realm from 'realm';
import * as uuid from 'uuid';
import {beforeEach, afterAll} from '@jest/globals';

Realm.flags.THROW_ON_GLOBAL_REALM = true;

export const createJestManagedInMemoryRealm = (schema: Realm.ConfigurationWithoutSync['schema']): Realm => {
  const inMemoryRealmConfig: Realm.ConfigurationWithoutSync = {
    inMemory: true,
    schema,
    schemaVersion: 1,
    path: testRealmFile,
  };

  const realm: Realm = new Realm(inMemoryRealmConfig);

  beforeEach(() => {
    realm.write(() => {
      realm.deleteAll();
    });
  });
  afterAll(async () => {
    realm.close();
    await fse.remove(inMemoryRealmConfig.path!);
  });

  return realm;
};

const testRealmDirectory = `${os.tmpdir()}/test-realm-${uuid.v4()}`;

const testRealmFile = `${testRealmDirectory}/default.realm`; // used to create lock files, etc.
