import Realm from 'realm';
import {latestRealmSchema} from './latestRealmSchema.ts';

export class RealmKeyValueItem extends Realm.Object<RealmKeyValueItem> {

  static schema = latestRealmSchema.realmKeyValueItem;

  public key!: Realm.Types.String;
  public value!: Realm.Types.String;

}
