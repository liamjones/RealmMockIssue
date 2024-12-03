const schema = {} as Record<'realmKeyValueItem', Realm.ObjectSchema>;

schema.realmKeyValueItem = {
  name: 'RealmKeyValueItem',
  primaryKey: 'key',
  properties: {
    key: 'string',
    value: 'string',
  },
};

export const latestRealmSchema = schema;
