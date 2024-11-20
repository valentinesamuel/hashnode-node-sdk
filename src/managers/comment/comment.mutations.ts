import { gql } from 'graphql-request';

export const ADD_COMMENT_MUTATION = gql`
    mutation addCommentMutation($input: AddCommentInput!) {
        addComment(input: $input) {
            comment {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    socialMediaLinks {
                        website
                        github
                        twitter
                        instagram
                        facebook
                        stackoverflow
                        linkedin
                        youtube
                    }
                    followersCount
                    followingsCount
                    tagline
                    following
                    followsBack
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const UPDATE_COMMENT_MUTATION = gql`
    mutation updateCommentMutation($input: UpdateCommentInput!) {
        updateComment(input: $input) {
            comment {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    socialMediaLinks {
                        website
                        github
                        twitter
                        instagram
                        facebook
                        stackoverflow
                        linkedin
                        youtube
                    }
                    followersCount
                    followingsCount
                    tagline
                    following
                    followsBack
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const REMOVE_COMMENT_MUTATION = gql`
    mutation removeCommentMutation($input: RemoveCommentInput!) {
        removeComment(input: $input) {
            comment {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    socialMediaLinks {
                        website
                        github
                        twitter
                        instagram
                        facebook
                        stackoverflow
                        linkedin
                        youtube
                    }
                    followersCount
                    followingsCount
                    tagline
                    following
                    followsBack
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const LIKE_COMMENT_MUTATION = gql`
    mutation likeCommentMutation($input: LikeCommentInput!) {
        likeComment(input: $input) {
            comment {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    socialMediaLinks {
                        website
                        github
                        twitter
                        instagram
                        facebook
                        stackoverflow
                        linkedin
                        youtube
                    }
                    followersCount
                    followingsCount
                    tagline
                    following
                    followsBack
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const LIKE_REPLY_MUTATION = gql`
    mutation likeReplyMutation($input: LikeReplyInput!) {
        likeReply(input: $input) {
            reply {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    followersCount
                    followingsCount
                    location
                    following
                    followsBack
                    isPro
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const ADD_REPLY_MUTATION = gql`
    mutation addReplyMutation($input: AddReplyInput!) {
        addReply(input: $input) {
            reply {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    followersCount
                    followingsCount
                    location
                    following
                    followsBack
                    isPro
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const UPDATE_REPLY_MUTATION = gql`
    mutation updateReplyMutation($input: UpdateReplyInput!) {
        updateReply(input: $input) {
            reply {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    followersCount
                    followingsCount
                    location
                    following
                    followsBack
                    isPro
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;

export const REMOVE_REPLY_MUTATION = gql`
    mutation removeReplyMutation($input: RemoveReplyInput!) {
        removeReply(input: $input) {
            reply {
                id
                content {
                    markdown
                }
                author {
                    id
                    username
                    name
                    bio {
                        markdown
                    }
                    profilePicture
                    followersCount
                    followingsCount
                    location
                    following
                    followsBack
                    isPro
                }
                dateAdded
                stamp
                totalReactions
                myTotalReactions
            }
        }
    }
`;