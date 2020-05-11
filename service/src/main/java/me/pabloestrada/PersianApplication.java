package me.pabloestrada;

import com.google.inject.Guice;
import com.google.inject.Injector;
import io.dropwizard.Application;
import io.dropwizard.jersey.filter.AllowedMethodsFilter;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.federecio.dropwizard.swagger.SwaggerBundle;
import io.federecio.dropwizard.swagger.SwaggerBundleConfiguration;
import me.pabloestrada.api.rest.AuthenticationServiceRestMethods;
import me.pabloestrada.api.rest.ExerciseTrackerRestMethods;
import me.pabloestrada.api.rest.PersonalWebsiteRestMethods;
import me.pabloestrada.core.CoreServiceConstants;
import me.pabloestrada.core.configuration.PersianServiceConfiguration;
import org.eclipse.jetty.servlets.CrossOriginFilter;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

public class PersianApplication
    extends Application<PersianServiceConfiguration>
{
    public static void main(String args[]) throws Exception {
        new PersianApplication().run(args);
    }

    @Override
    public void initialize(final Bootstrap<PersianServiceConfiguration> bootstrap) {
        bootstrap.addBundle(new SwaggerBundle<>() {
            protected SwaggerBundleConfiguration getSwaggerBundleConfiguration(final PersianServiceConfiguration configuration) {
                return configuration.swaggerBundleConfiguration;
            }
        });
    }

    @Override
    public void run(final PersianServiceConfiguration configuration, final Environment environment) {
        final FilterRegistration.Dynamic cors = environment.servlets()
                .addFilter("CORSFilter", CrossOriginFilter.class);

        CoreServiceConstants.setMongoConnectionString(configuration.databaseURI);
        CoreServiceConstants.setHost(configuration.environmentConfiguration.host);

        cors.addMappingForUrlPatterns(
                EnumSet.allOf(DispatcherType.class), false, environment.getApplicationContext().getContextPath() + "*");
        cors.setInitParameter(AllowedMethodsFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,HEAD,OPTIONS");
        cors.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        cors.setInitParameter(CrossOriginFilter.ALLOWED_HEADERS_PARAM, "*");
        cors.setInitParameter(CrossOriginFilter.EXPOSED_HEADERS_PARAM, "Link");
        cors.setInitParameter(CrossOriginFilter.ALLOW_CREDENTIALS_PARAM, "true");

        final Injector injector = Guice.createInjector(new PersianServiceModule());
        final ExerciseTrackerRestMethods exerciseTrackerApi = injector.getInstance(ExerciseTrackerRestMethods.class);
        final AuthenticationServiceRestMethods authenticationApi = injector.getInstance(AuthenticationServiceRestMethods.class);
        final PersonalWebsiteRestMethods websiteGeneratorApi = injector.getInstance(PersonalWebsiteRestMethods.class);

        environment.jersey().register(exerciseTrackerApi);
        environment.jersey().register(authenticationApi);
        environment.jersey().register(websiteGeneratorApi);
    }
}