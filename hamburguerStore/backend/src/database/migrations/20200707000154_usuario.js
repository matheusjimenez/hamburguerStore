
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.increments();
        table.string('id_cliente').unique().notNullable();
        table.string('email').unique().notNullable();
        table.string('senha').notNullable();
        table.string('nome').notNullable();
        table.string('cep');
        table.string('rua');
        table.string('numero_casa');
        table.string('bairro');
        table.string('complemento');
        table.string('ponto_referencia');
        table.string('telefone_cliente').notNullable();
        table.boolean('isAdmin').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('users');
  };
  