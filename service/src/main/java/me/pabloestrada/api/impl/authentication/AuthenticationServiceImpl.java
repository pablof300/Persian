package me.pabloestrada.api.impl.authentication;

import com.google.inject.Inject;
import me.pabloestrada.api.AuthenticationService;
import me.pabloestrada.core.authentication.UserAuthenticator;

import java.util.Optional;

final public class AuthenticationServiceImpl
    extends AuthenticationService
{
    private UserAuthenticator userAuthenticator;

    @Inject
    public AuthenticationServiceImpl(final UserAuthenticator userAuthenticator) {
        this.userAuthenticator = userAuthenticator;
    }

    @Override
    public Optional<String> signJWT(final String username, final String password) {
        return userAuthenticator.signJWT(username, password);
    }
}
