import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    IconButton,
    Card,
    CardHeader,
} from '@material-ui/core/';
import { Icon } from '../'

class Weather extends Component {
    render() {
        const {
            classes,
            mode,
            history,
        } = this.props;
        let screenMode = `full`;
        if (mode) {
            screenMode = mode;
        } else {
            alert('Weather mode not specified');
            return null;
        }

        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        className={cn(classes.screenCardHeader)}
                        title={`Weather`}
                        avatar={
                            screenMode === 'preview' ?
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/weather`)
                                    }}
                                >
                                    <Icon
                                        icon={`weather`}
                                        color={`secondary`}
                                    />
                                </IconButton>
                                : <Icon
                                    className={cn(classes.padIcon)}
                                    icon={`weather`}
                                    color={`secondary`}
                                />
                        }
                        action={
                            screenMode === 'full' ?
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/`)
                                    }}
                                >
                                    <Icon icon={`home`} />
                                </IconButton>
                                : null
                        }

                    />
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        mapbox: store.mapbox
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Weather))));