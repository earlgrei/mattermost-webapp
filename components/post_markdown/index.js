// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {getCurrentUser, getUser} from 'mattermost-redux/selectors/entities/users';

import PostMarkdown from './post_markdown';

function mapStateToProps(state, ownProps) {
    const currentUser = getCurrentUser(state);
    const postUser = getUser(state, ownProps.post.user_id);
    return {
        pluginHooks: state.plugins.hooks.MessageWillFormat,
        currentUser,
        postUser,
    };
}

export default connect(mapStateToProps)(PostMarkdown);
