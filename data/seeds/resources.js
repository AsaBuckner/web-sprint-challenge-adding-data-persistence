/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: "wood", resource_description: 'hard'},
    {resource_name: "medal", resource_description: 'gold'},
    {resource_name: "apples", resource_description: 'yellow'},
    {resource_name: "money", resource_description: 'lots'}
  ]);
};
