# itransition-task-6-back

<https://itransition-task-6-back.onrender.com>

Web-application.

The application is a general chat for everyone. No registration or authentication, all users have immediate access to the "message board".

Users can send messages by specifying a set of tags in addition to message text.

The screen is divided into two parts, a smaller "my tags panel" on the left and a larger chat on the right.

On the left side, the user can enter a set of tags that he has enabled - tags are shown in a column and can be removed by clicking.

In a user's chat, only those messages that are marked with tags enabled for this user are visible. Essentially, tags work like a message filter. Note that "my tags" on the left panel are not the same as "send this message with these tags".

Messages are stored in the database forever, when you enter the site, messages sent earlier are visible.

Messages without tags are visible always with any tag-filters configuration. If users turned on tags “A” и “B”, he or she gets all messages with “A” or “B” or both as well as messages with our tags.

When sending messages, they appear to users "immediately" (there may be a slight delay, you can either poll the server or use websockets).

When entering tags, you need to use the 3rd-pary component for tags with auto-completion (for those tags that are already on the site). It should be possible to use tag, which was never used before.
