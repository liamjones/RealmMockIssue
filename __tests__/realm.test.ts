import {it, jest} from '@jest/globals';
import {createJestManagedInMemoryRealm} from '../src/createJestManagedInMemoryRealm.ts';
import {hasRatedThisVersion} from '../src/hasRatedThisVersion.ts';
import {RealmKeyValueItem} from '../src/RealmKeyValueItem.ts';

jest.mock('../src/hasRatedThisVersion.ts');

const realm = createJestManagedInMemoryRealm([RealmKeyValueItem]);

it('test', () => {
  hasRatedThisVersion(realm, '1.2.3');
  realm.objects(RealmKeyValueItem);
});
