import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';

const Routes = () => {
    const { user } = useContext(UserContext);

    return (
        <Switch>
            <Route exact path="/sermons" component={Index} />

            {user && user.token ? (
                <>
                    <Route exact path="/sermons/new" component={New} />
                    <Route exact path="/sermons/edit/:id" component={Edit} />
                    <Route exact path="/sermons/destroy/:id" component={Destroy} />
                </>
            ) : null}
        </Switch>
    );
}

export default Routes;