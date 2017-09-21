// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'myblog',
      user:     'MacAir',
      password: 'byteball-gngt'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'myblog',
      user:     'postgres',
      password: 'byteball-gngt'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://xbhofoqqelqxpv:6ab4c9a6fb10c3e0befd8b6fa31969a7cc9f7f088ec875baf33bf53271eec4df@ec2-54-235-254-251.compute-1.amazonaws.com:5432/dfud36j1eg2jm3',
      user:     'postgres',
      password: 'byteball-gngt'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
