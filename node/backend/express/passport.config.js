const GoogleStrategy = require('passport-google-oauth20').Strategy;

modules.export = (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                
            }
        )
    )
}