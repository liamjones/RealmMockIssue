import Realm from 'realm';
import {RealmKeyValueItem} from './RealmKeyValueItem.ts';

export const hasRatedThisVersion = (realm: Realm, thisAppVersion: string): boolean => {
  const lastReviewedVersion = realm.objectForPrimaryKey(RealmKeyValueItem.schema.name, 'LAST_PROMPTED_FOR_RATING_APP_VERSION');
  if (!lastReviewedVersion) {
    return false;
  }
  return lastReviewedVersion.value === thisAppVersion;
};
