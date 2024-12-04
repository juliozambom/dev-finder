import { RootState } from '@/src/store/types';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';

const LanguageColorMap = {
  ['Java']: '#b07219',
  ['TypeScript']: '#2b7489',
  ['Python']: '#3572A5',
  ['C#']: '#178600',
  ['JavaScript']: '#f1e05a',
  ['Ruby']: '#701516',
  ['PHP']: '#4F5D95',
  ['Go']: '#00ADD8',
  ['Swift']: '#ffac45',
  ['Kotlin']: '#F18E33',
  ['Rust']: '#dea584',
  ['Dart']: '#0175C2',
  ['Scala']: '#DC322F',
  ['Haskell']: '#5e5086',
  ['Objective-C']: '#438eff',
  ['C++']: '#f34b7d',
  ['HTML']: '#e34c26',
  ['CSS']: '#563d7c',
  ['Shell']: '#89e051',
  ['Makefile']: '#427819',
  ['Dockerfile']: '#384d54',
  ['JSON']: '#999999',
  ['YAML']: '#0173b2',
};

function RepositoryItem({
  name,
  description,
  url,
  language,
  stars,
  forks,
  visibility,
}: {
  name: string;
  description: string;
  url: string;
  language: string;
  stars: number;
  forks: number;
  visibility: string;
}) {
  const showForks = forks > 0 && forks > stars;
  const showStars = stars > 0 && stars > forks;

  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      className="flex-row mb-4 gap-4"
    >
      <View className="w-24 h-24 bg-gray-200 rounded-md"></View>

      <View className="flex-1">
        <Text className="font-lato-bold text-lg dark:text-white">{name}</Text>
        <Text className="text-gray-300 font-lato-normal text-sm mt-1">
          {description ? `• ${description}` : ''}
        </Text>

        <View className="flex-row items-center mt-4 justify-between">
          <View className="flex-row items-center gap-2">
            {language && (
              <View className="flex-row items-center gap-2">
                <View
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor:
                      LanguageColorMap[
                        language as keyof typeof LanguageColorMap
                      ] || undefined,
                  }}
                />
                <Text className="font-lato-normal dark:text-white">
                  {language}
                </Text>
              </View>
            )}

            {(showForks || (showStars && language)) && (
              <Text className="font-lato-normal text-gray-200 text-xs">•</Text>
            )}

            {showForks && (
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="fork-right" size={20} color="#C4C4C4" />
                <Text className="font-lato-normal dark:text-white text-md">
                  {forks}
                </Text>
              </View>
            )}

            {showStars && (
              <View className="flex-row items-center gap-1">
                <MaterialIcons name="star-border" size={20} color="#C4C4C4" />
                <Text className="font-lato-normal dark:text-white text-md">
                  {stars}
                </Text>
              </View>
            )}
          </View>
          <View className="bg-green-100 px-2 py-1 rounded-md">
            <Text className="text-green-400">{visibility}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function UserRepositoriesList() {
  const { repositories } = useSelector((state: RootState) => state.user);

  return (
    <FlatList
      data={repositories}
      contentContainerStyle={{
        paddingBottom: 80,
      }}
      className="mt-8"
      renderItem={({ item }) => <RepositoryItem {...item} />}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
}
