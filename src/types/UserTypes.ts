export interface UserData {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
    name: string;
    token: string;
  };
  
  export interface UserResponse { 
    record: {
      avatar: string
      collectionId: string
      collectionName: string
      created: string
      email: string
      emailVisibility: boolean
      id: string
      name: string
      updated: string
      username: string
      verified: boolean
      expand: {}
    }
    token: string
  }
  

  export interface UserList {
    page: number
    perPage: number
    totalItems: number
    totalPages: number
    items: Array<{
      avatar: string
      collectionId: string
      collectionName: string
      created: string
      email: string
      emailVisibility: boolean
      id: string
      name: string
      updated: string
      username: string
      verified: boolean
      expand: {}
    }>
  }
  