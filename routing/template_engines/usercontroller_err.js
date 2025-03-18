export async function getUserById(id) {
    if (!id) {
      throw new Error('User ID is required!');
    }
  
    const users = [
      { id: '1', name: 'Divyaa' },
      { id: '2', name: 'Rasheeth' },
    ];
  
    const user = users.find(u => u.id === id);
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return user; 
  }
  