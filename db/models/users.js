const { Model } = require("objection");

class Users extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const Channel = require("./channel");
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        join: {
          from: "users.channelId",
          to: "channel.id",
        },
      },
    };
  }
}

module.exports = Users;
