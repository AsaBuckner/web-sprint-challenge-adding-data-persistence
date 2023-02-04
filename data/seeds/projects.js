/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'BloomTech', project_description: "something coding", project_completed: true},
    {project_name: 'Budget Expenses', project_description: "calculations happeing", project_completed: true},
    {project_name: 'Shopping', project_description: "Speend speend spend", project_completed: false}
  ]);
};