"use client"

import { Play, Zap, Video, TrendingUp, Dumbbell, Camera, Share2, CheckCircle2, ChevronRight, Sparkles, Clock, Target, Award, Users, Flame, BarChart3, Calendar } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "Todos", icon: Dumbbell },
    { id: "legs", name: "Pernas", icon: Flame },
    { id: "glutes", name: "Glúteos", icon: Target },
    { id: "arms", name: "Braços", icon: Dumbbell },
    { id: "chest", name: "Peito", icon: Award },
    { id: "back", name: "Costas", icon: BarChart3 },
    { id: "abs", name: "Abdômen", icon: Zap },
  ]

  const exercises = [
    { name: "Agachamento Livre", duration: "8s", level: "Iniciante", muscles: "Pernas, Glúteos", category: "legs", score: 92 },
    { name: "Flexão Diamante", duration: "10s", level: "Intermediário", muscles: "Peito, Tríceps", category: "chest", score: 88 },
    { name: "Prancha Lateral", duration: "12s", level: "Avançado", muscles: "Core, Oblíquos", category: "abs", score: 95 },
    { name: "Stiff", duration: "9s", level: "Intermediário", muscles: "Posterior, Glúteos", category: "glutes", score: 90 },
    { name: "Remada Curvada", duration: "11s", level: "Avançado", muscles: "Costas, Bíceps", category: "back", score: 87 },
    { name: "Rosca Direta", duration: "7s", level: "Iniciante", muscles: "Bíceps", category: "arms", score: 91 },
  ]

  const workoutPlans = [
    { title: "Treino Rápido", time: "15min", exercises: 8, goal: "Condicionamento", color: "from-[#22c55e] to-[#16a34a]" },
    { title: "Hipertrofia Pernas", time: "35min", exercises: 12, goal: "Ganho de Massa", color: "from-[#a855f7] to-[#9333ea]" },
    { title: "Glúteo Perfeito", time: "25min", exercises: 10, goal: "Tonificação", color: "from-[#ec4899] to-[#db2777]" },
    { title: "Full Body", time: "45min", exercises: 15, goal: "Emagrecimento", color: "from-[#f59e0b] to-[#d97706]" },
  ]

  const evoClipFeatures = [
    { title: "Comparação Lado a Lado", desc: "Veja sua evolução técnica em detalhes", icon: Video },
    { title: "Métricas Visuais", desc: "Amplitude, força e progresso destacados", icon: BarChart3 },
    { title: "Trilha Motivacional", desc: "Música automática que inspira", icon: Sparkles },
    { title: "Formato 9:16", desc: "Pronto para TikTok, Reels e Stories", icon: Share2 },
  ]

  const filteredExercises = activeCategory === "all" 
    ? exercises 
    : exercises.filter(ex => ex.category === activeCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.12),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-28">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#22c55e] blur-2xl opacity-60 animate-pulse" />
                <Zap className="relative w-12 h-12 sm:w-14 sm:h-14 text-[#a855f7]" strokeWidth={2.5} />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                FITCLIP
              </h1>
            </div>

            {/* Slogan */}
            <div className="space-y-3">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-bold max-w-4xl mx-auto leading-tight">
                Treine certo. Treine rápido. Treine com IA.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Vídeos curtos de 5-12s, correção de postura por inteligência artificial e evolução visual automática. 
                A forma mais moderna e motivadora de treinar.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <button className="group relative w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center gap-2">
                  Começar Gratuitamente
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-gray-300 text-gray-900 rounded-2xl font-bold text-lg hover:border-[#22c55e] hover:bg-gray-50 transition-all duration-300 shadow-lg">
                Ver Demo Interativa
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-3xl mx-auto pt-12 sm:pt-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#a855f7] to-[#9333ea] bg-clip-text text-transparent">500+</div>
                <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">Exercícios em Vídeo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#22c55e] to-[#16a34a] bg-clip-text text-transparent">5-12s</div>
                <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">Vídeos Curtos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#a855f7] to-[#22c55e] bg-clip-text text-transparent">100%</div>
                <div className="text-sm sm:text-base text-gray-600 mt-2 font-medium">Powered by IA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a855f7]/10 to-[#22c55e]/10 rounded-full text-[#a855f7] font-bold mb-6 border border-[#a855f7]/20">
              <Sparkles className="w-5 h-5" />
              Funcionalidades Essenciais
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tudo que você precisa
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta para treinos eficientes, execução perfeita e motivação constante
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 - Biblioteca */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#a855f7] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Video className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Biblioteca de Exercícios</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Mais de 500 vídeos curtos (5-12s) com execução perfeita. Categorias organizadas e filtros inteligentes por nível, objetivo e equipamento.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Músculos trabalhados destacados</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Erros comuns explicados visualmente</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Thumbnails de alta qualidade</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 - Treinos IA */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#22c55e] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Treinos Personalizados por IA</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Informe seu objetivo, tempo disponível e equipamentos. A IA cria treinos otimizados com séries, repetições e vídeos de cada exercício.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Objetivos: emagrecer, hipertrofia, glúteo</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Tempo: 5 a 45 minutos</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Áudio de instruções incluído</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 - Modo Execução */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#a855f7] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Modo Execução Imersivo</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Vídeo ocupando 70-90% da tela, timer automático, barra de progresso e controles intuitivos. Foco total no treino.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Próximo exercício em miniatura</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Alertas de erros comuns</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Controle de descanso inteligente</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 - Correção IA */}
            <div className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-[#22c55e] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Camera className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Correção de Postura por IA</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Grave 5-15s do seu exercício. A IA analisa ângulos de joelho, coluna, cotovelos e ritmo. Feedback instantâneo com nota de 0-100.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Setas e linhas sobre o vídeo</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Frases curtas de correção</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>Salvo na linha do tempo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 5 - EvoClip (Destaque) */}
            <div className="group relative bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-3xl p-8 md:col-span-2 lg:col-span-2 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">EvoClip – Vídeos de Evolução Automáticos</h3>
                <p className="text-white/95 mb-8 text-lg leading-relaxed">
                  A IA armazena todos os seus vídeos corrigidos e gera automaticamente compilações mensais (15-30s) e anuais (30-60s) da sua evolução. Comparações lado a lado, métricas visuais, trilha motivacional e formato 9:16 pronto para compartilhar.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white/95">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-medium">Comparações lado a lado automáticas</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/95">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-medium">Trilha motivacional incluída</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/95">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-medium">Seleção dos melhores momentos</span>
                    </li>
                  </ul>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-white/95">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-medium">Formato 9:16 para TikTok/Reels</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/95">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-medium">Métricas visuais (+2cm amplitude)</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/95">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="font-medium">Transições suaves profissionais</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Library Preview */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a855f7]/10 to-[#22c55e]/10 rounded-full text-[#a855f7] font-bold mb-6 border border-[#a855f7]/20">
              <Video className="w-5 h-5" />
              Biblioteca Completa
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              500+ Exercícios em Vídeo
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Categorias organizadas, filtros inteligentes e execução perfeita em cada vídeo
            </p>
          </div>

          {/* Categories */}
          <div className="flex overflow-x-auto gap-3 pb-6 mb-10 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat.id
                      ? "bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white shadow-lg scale-105"
                      : "bg-white border-2 border-gray-200 text-gray-700 hover:border-[#a855f7] hover:text-[#a855f7]"
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={2.5} />
                  {cat.name}
                </button>
              )
            })}
          </div>

          {/* Exercise Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredExercises.map((exercise, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#22c55e] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Video Placeholder */}
                <div className="relative aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/20 to-[#22c55e]/20" />
                  <Dumbbell className="w-20 h-20 text-white/40 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-[#a855f7] ml-1" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-white text-sm font-bold flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {exercise.duration}
                  </div>

                  {/* Score Badge */}
                  <div className="absolute top-4 left-4 px-4 py-2 bg-[#22c55e] rounded-full text-white text-sm font-bold flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {exercise.score}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{exercise.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-4 py-1.5 bg-[#22c55e]/10 text-[#22c55e] rounded-full text-sm font-bold">
                      {exercise.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-bold text-gray-900">Músculos:</span> {exercise.muscles}
                  </p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Plans */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a855f7]/10 to-[#22c55e]/10 rounded-full text-[#a855f7] font-bold mb-6 border border-[#a855f7]/20">
              <Sparkles className="w-5 h-5" />
              Treinos Inteligentes
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Personalizados por IA
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Informe seu objetivo e tempo. A IA cria o treino perfeito para você.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workoutPlans.map((plan, idx) => (
              <div
                key={idx}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-6 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Target className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">{plan.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 group-hover:text-white/90 transition-colors">
                      <Clock className="w-5 h-5" strokeWidth={2.5} />
                      <span className="font-semibold">{plan.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 group-hover:text-white/90 transition-colors">
                      <Dumbbell className="w-5 h-5" strokeWidth={2.5} />
                      <span className="font-semibold">{plan.exercises} exercícios</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 group-hover:text-white/90 transition-colors">
                      <Target className="w-5 h-5" strokeWidth={2.5} />
                      <span className="font-semibold">{plan.goal}</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gray-900 group-hover:bg-white text-white group-hover:text-gray-900 rounded-xl font-bold transition-all duration-300">
                    Iniciar Treino
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workout Mode Preview */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a855f7]/10 to-[#22c55e]/10 rounded-full text-[#a855f7] font-bold mb-6 border border-[#a855f7]/20">
                  <Play className="w-5 h-5" />
                  Modo Execução
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Foco Total no Treino
                </h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  Vídeo em tela cheia (70-90%), controles intuitivos e experiência imersiva. Tudo para você treinar com máxima eficiência.
                </p>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 mb-1">Timer Automático</div>
                    <div className="text-gray-600">Controle preciso de séries, repetições e tempo de descanso</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 mb-1">Próximo Exercício</div>
                    <div className="text-gray-600">Miniatura em destaque para preparação mental antecipada</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-bold text-xl text-gray-900 mb-1">Alertas de Erros</div>
                    <div className="text-gray-600">Avisos visuais dos erros mais comuns durante a execução</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Phone Mockup */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-sm">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3.5rem] p-4 shadow-2xl">
                  <div className="bg-white rounded-[3rem] overflow-hidden aspect-[9/19.5]">
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-10 flex items-center justify-center">
                      <div className="w-28 h-6 bg-gray-800 rounded-full" />
                    </div>

                    {/* Video Area */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 h-[68%] flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7]/30 to-[#22c55e]/30" />
                      <Dumbbell className="w-24 h-24 text-white/50" strokeWidth={1.5} />
                      
                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700">
                        <div className="h-full w-2/5 bg-gradient-to-r from-[#a855f7] to-[#22c55e]" />
                      </div>

                      {/* Exercise Info Overlay */}
                      <div className="absolute top-6 left-6 right-6">
                        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4">
                          <div className="text-white font-bold text-lg mb-1">Série 2 de 3</div>
                          <div className="text-white/80 text-sm">12 repetições</div>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="p-6 space-y-5">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">Agachamento Livre</div>
                        <div className="text-gray-500 font-semibold">3 séries × 12 reps</div>
                      </div>
                      
                      <div className="flex items-center justify-center gap-6">
                        <button className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <ChevronRight className="w-7 h-7 text-gray-700 rotate-180" strokeWidth={2.5} />
                        </button>
                        <button className="w-20 h-20 bg-gradient-to-r from-[#a855f7] to-[#9333ea] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
                          <Play className="w-10 h-10 text-white ml-1" strokeWidth={2.5} />
                        </button>
                        <button className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                          <ChevronRight className="w-7 h-7 text-gray-700" strokeWidth={2.5} />
                        </button>
                      </div>

                      {/* Next Exercise Preview */}
                      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Play className="w-7 h-7 text-gray-500" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-500 font-bold mb-1">PRÓXIMO EXERCÍCIO</div>
                          <div className="font-bold text-gray-900 text-lg truncate">Flexão Diamante</div>
                          <div className="text-sm text-gray-600">3 × 10 reps</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#22c55e] blur-3xl opacity-30 -z-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Correction Preview */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10 rounded-full text-[#22c55e] font-bold mb-6 border border-[#22c55e]/20">
              <Camera className="w-5 h-5" />
              Tecnologia IA
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Correção de Postura Instantânea
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Grave 5-15 segundos do seu exercício. A IA analisa ângulos, ritmo e postura, dando feedback com nota de 0-100.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Before - Recording */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 animate-pulse" />
                <Camera className="w-20 h-20 text-white/60" strokeWidth={1.5} />
                <div className="absolute top-6 left-6 flex items-center gap-3 px-5 py-3 bg-red-500 rounded-full shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  <span className="text-white text-sm font-bold">Gravando...</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-2xl p-4">
                  <div className="text-white text-sm font-semibold mb-2">Dica:</div>
                  <div className="text-white/90 text-sm">Posicione a câmera de lado para melhor análise</div>
                </div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-2xl font-bold text-gray-900">1. Grave seu exercício</div>
                <div className="text-gray-600">Entre 5 e 15 segundos</div>
                <button className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl font-bold hover:shadow-lg transition-all">
                  Parar Gravação
                </button>
              </div>
            </div>

            {/* After - AI Feedback */}
            <div className="bg-gradient-to-br from-[#22c55e]/5 to-[#16a34a]/5 rounded-3xl p-8 border-2 border-[#22c55e] shadow-xl">
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/20 to-[#16a34a]/20" />
                <Camera className="w-20 h-20 text-white/60" strokeWidth={1.5} />
                
                {/* AI Feedback Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#22c55e] blur-2xl opacity-50 animate-pulse" />
                    <div className="relative flex items-center justify-center w-32 h-32 bg-[#22c55e] rounded-full text-white text-5xl font-bold shadow-2xl">
                      87
                    </div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-2xl space-y-3 w-full max-w-xs">
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-bold">Eleve o peito 5cm</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-bold">Joelhos alinhados ✓</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-900">
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" strokeWidth={2.5} />
                      <span className="font-bold">Ritmo perfeito ✓</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="text-2xl font-bold text-gray-900">2. Receba feedback IA</div>
                <div className="text-gray-600">Análise instantânea com nota</div>
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white rounded-2xl font-bold hover:shadow-lg transition-all">
                    Regravar
                  </button>
                  <button className="flex-1 px-6 py-4 bg-[#22c55e] text-white rounded-2xl font-bold hover:shadow-lg transition-all">
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EvoClip Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#a855f7] via-[#9333ea] to-[#7c3aed] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm rounded-full text-white font-bold mb-8 border border-white/30">
              <TrendingUp className="w-5 h-5" strokeWidth={2.5} />
              Recurso Exclusivo FITCLIP
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              EvoClip: Sua Evolução em Vídeo
            </h2>
            <p className="text-xl sm:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Vídeos automáticos mensais e anuais da sua jornada. Compartilhe nas redes e inspire milhares de pessoas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {evoClipFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.desc}</p>
                </div>
              )
            })}
          </div>

          {/* EvoClip Preview */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl p-6 shadow-2xl">
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#22c55e] blur-3xl opacity-50 animate-pulse" />
                    <TrendingUp className="relative w-24 h-24 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-white font-bold text-3xl mb-3">Sua Evolução 2024</div>
                  <div className="text-white/80 text-lg mb-8">Janeiro - Dezembro</div>
                  <div className="flex flex-wrap gap-3 justify-center mb-8">
                    <div className="px-5 py-2.5 bg-[#22c55e] rounded-full text-white text-sm font-bold shadow-lg">
                      +15kg força
                    </div>
                    <div className="px-5 py-2.5 bg-[#a855f7] rounded-full text-white text-sm font-bold shadow-lg">
                      +5cm amplitude
                    </div>
                    <div className="px-5 py-2.5 bg-[#f59e0b] rounded-full text-white text-sm font-bold shadow-lg">
                      +92% técnica
                    </div>
                  </div>
                  <div className="text-white/70 text-sm">
                    Vídeo gerado automaticamente pela IA
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex gap-3">
                  <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Gerar Mensal
                  </button>
                  <button className="flex-1 px-6 py-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-white rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Gerar Anual
                  </button>
                </div>
                <button className="w-full px-6 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Compartilhar nas Redes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Junte-se a milhares de pessoas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Que já transformaram seus treinos com FITCLIP
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-gray-600 font-medium">Usuários ativos</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600 font-medium">Vídeos analisados</div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#a855f7] to-[#22c55e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">4.9★</div>
              <div className="text-gray-600 font-medium">Avaliação média</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pronto para transformar<br />seus treinos?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de pessoas que já treinam de forma mais inteligente, rápida e motivadora com FITCLIP
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <button className="px-12 py-6 bg-gradient-to-r from-[#a855f7] to-[#9333ea] text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              Começar Gratuitamente
            </button>
            <button className="px-12 py-6 bg-white border-2 border-gray-300 text-gray-900 rounded-2xl font-bold text-xl hover:border-[#22c55e] hover:bg-gray-50 transition-all duration-300 shadow-lg">
              Ver Planos Premium
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Sem cartão de crédito necessário • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Zap className="w-10 h-10 text-[#a855f7]" strokeWidth={2.5} />
              <span className="text-3xl font-bold">FITCLIP</span>
            </div>
            <div className="text-gray-400 text-center md:text-left text-lg">
              Treine certo. Treine rápido. Treine com IA.
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Share2 className="w-6 h-6" strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            © 2024 FITCLIP. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
