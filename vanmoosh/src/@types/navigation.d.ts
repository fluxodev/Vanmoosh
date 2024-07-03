
export declare global { // essa linha é importante para que o typescript entenda que estamos sobrescrevendo um tipo global
    namespace ReactNavigation { // aqui definimos que vamos sobrescrever um tipo do React Navigation
        interface RootParamList { // aqui definimos que vamos sobrescrever o tipo RootParamList
            Groups: undefined; //
            NewGroup: undefined;
            Students: {
                group: string;
            };
        }
    }
}