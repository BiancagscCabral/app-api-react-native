import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Estilos da Tela e Título
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingTop: 60, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

  // --- 🎨 ESTILOS DA NOVA BARRA DE BUSCA ---
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center', // Alinha o botão-círculo com o input
  },
  input: {
    flex: 1, 
    backgroundColor: '#FFF',
    borderRadius: 25, // Deixa bem arredondado (cápsula)
    paddingHorizontal: 20, // Espaço interno lateral
    paddingVertical: 12,   // Espaço interno vertical
    fontSize: 16,
    color: '#333',
    
    // Sombra suave para dar destaque (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
  },
  button: {
    marginLeft: 12,
    backgroundColor: '#007BFF',
    width: 50,  // Largura fixa
    height: 50, // Altura igual à largura para fazer um círculo
    borderRadius: 25, // Metade da largura/altura = Círculo perfeito
    justifyContent: 'center',
    alignItems: 'center',
    
    // Sombra no botão também
    shadowColor: "#007BFF",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  // (O 'buttonText' foi removido, não é mais necessário)

  // Estilos para o Card de Resultado
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    // Removemos a margem superior para funcionar bem no Header da lista
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  
  // Estilos de Feedback (Erro/Loading)
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
  },
  loadingContainer: {
    marginTop: 30,
    marginBottom: 20, // Adicionado espaço
  },

  // --- Estilos para Repositórios ---
  repoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 25,
    marginBottom: 10,
  },
  repoItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  repoName: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: '500',
  },

  // Estilo para o Container da Lista
  listContainer: {
    flex: 1, // Faz a lista ocupar o espaço restante
  }
});