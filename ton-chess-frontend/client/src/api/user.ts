
export const getUserStats = async () => {
    try {
        return {
            username  : 'Артём Гайбович',
            wins: 10,
            rating : 10,
            total_games: 10,
            avatar : 'https://sun1-99.userapi.com/s/v1/ig2/gjhAvJWyiIgs7GWGj-ghmfhj866DpXJ2Q_PIsmaXsxdaXlT36MPK8kP3h8S_7-kfflEXuL60bduPY4nL7xQwUaVd.jpg?quality=95&crop=235,683,1541,1541&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440&ava=1&u=dn8ptncjz6LnKbqbe0NzCSFX_pCJ6Zm22PiulWwH6w8&cs=200x200'
        }
    } catch (error) {
        console.error('Error fetching user stats:', error);
        throw error;
    }
};
