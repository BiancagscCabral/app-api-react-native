import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  SafeAreaView,
  ActivityIndicator, 
  Alert, 
  FlatList, // Componente principal
  Linking   
} from 'react-native';

import { Feather } from '@expo/vector-icons'; 


import styles from './styles';

// Definindo o "formato" (tipo) 
type UserData = {
  name: string;
  bio: string;
  avatar_url: string;
};

// Definindo o tipo para os Repositórios
type Repo = {
  id: number;
  name: string;
  html_url: string; // O link para o repositório
};

export default function App() {
  // 1. Estados
  const [username, setUsername] = useState(''); 
  const [userData, setUserData] = useState<UserData | null>(null); 
  const [repos, setRepos] = useState<Repo[]>([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(''); 

  // 2. Função de busca na API
  const handleSearch = async () => {
    if (!username) {
      return;
    }

    setLoading(true);
    setUserData(null);
    setRepos([]); // Limpa os repositórios antigos
    setError('');

    try {
      // 1ª Chamada: Buscar o usuário
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Usuário não encontrado');
      }
      const data = await response.json();
      setUserData({
        name: data.name,
        bio: data.bio,
        avatar_url: data.avatar_url,
      });

      // 2ª Chamada: Buscar os repositórios
      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!repoResponse.ok) {
        throw new Error('Não foi possível buscar os repositórios');
      }
      const repoData = await repoResponse.json();
      setRepos(repoData); // Salva a lista

    } catch (err: any) {
      setError(err.message);
      Alert.alert('Erro', err.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para abrir o link do repositório
  const openRepoUrl = (url: string) => {
    Linking.openURL(url);
  };

  // 3. O que renderiza na tela (JSX)
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Buscar Perfil GitHub</Text>

      {/* --- 🎨 NOVA BARRA DE BUSCA --- */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um username..."
          placeholderTextColor="#999" // Cor do placeholder
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSearch} 
          disabled={loading}
        >
          
          <Feather name="search" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      


     
      <FlatList
        data={repos} 
        keyExtractor={(item) => item.id.toString()}
        style={styles.listContainer} // Ocupa o espaço restante
        
        
        ListHeaderComponent={
          <>            {/* 1. Se estiver carregando... */}
            {loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007BFF" />
              </View>
            )}

            {/* 2. Se tiver um erro... */}
            {error && !loading && (
              <Text style={styles.errorText}>{error}</Text>
            )}

            {/* 3. Se tiver dados do usuário... (O Card de Perfil) */}
            {userData && !loading && (
              <View style={styles.resultContainer}>
                <Image
                  source={{ uri: userData.avatar_url }} 
                  style={styles.avatar}
                />
                <Text style={styles.name}>{userData.name}</Text>
                <Text style={styles.bio}>{userData.bio || '(Sem bio)'}</Text>
              </View>
            )}

            {/* 4. Título dos Repositórios (só aparece se houver) */}
            {repos.length > 0 && !loading && (
              <Text style={styles.repoTitle}>Repositórios Públicos</Text>
            )}
          </>
        }

        // renderItem renderiza CADA item da lista (os repositórios)
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.repoItem}
            onPress={() => openRepoUrl(item.html_url)} 
          >
            <Text style={styles.repoName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      
    </SafeAreaView>
  );
}