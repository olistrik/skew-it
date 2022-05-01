var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:Kranex/skew-it.git', // Update to point to your repository  
        user: {
            name: 'Kranex', // update to use your name
            email: 'oliverstrik+skewit@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
