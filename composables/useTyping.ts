import { ref } from 'vue'

export function useTyping(fullText: string, speed = 60) {
  const typedText = ref('')
  
  const type = (text: string, i = 0) => {
    if (i <= text.length) {
      typedText.value = text.slice(0, i)
      setTimeout(() => type(text, i + 1), speed)
    }
  }

  const startTyping = () => {
    typedText.value = ''
    type(fullText)
  }

  return {
    typedText,
    startTyping
  }
}
