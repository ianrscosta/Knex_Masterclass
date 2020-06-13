const knex = require('../database/index');

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id, page = 1 } = req.query;

            const query = knex('projects')
            .limit(4)
            .offset((page - 1) * 4)

            const totalProjects = knex('projects').count()


            if (user_id) {
                query
                  .where({ user_id })
                  .join('users', 'users.id', '=', 'projects.user_id')
                  .select('projects.*', 'users.username')

                totalProjects
                  .where({ user_id })
            }

            const [ count ] = await totalProjects
            console.log(count)

            res.header('X-Total-Count', count['count'])

            const results = await query

            return res.json(results)
        } catch (error) {
            next(error)
        }
    },
    async create(req, res, next) {
        try {

            const { title, user_id } = req.body 
 
            await knex('projects').insert({
                title,
                user_id
            })
 
            return res.status(201).send()
         } catch (error) {
             next(error)
         }
    },
    async update(req, res, next) {
        try {

            const { title } = req.body 
            const { id } = req.params

            await knex('projects')
            .update({ title })
            .where({ id })

            return res.send()
            
        } catch (error) {
            next(error)
        }
    },
    async delete(req, res, next) {
        try {
            const { id } = req.params

            await knex('projects')
            .where({id})
            .del()

            return res.send()

        } catch (error) {
            next(error)
        }
    }
}