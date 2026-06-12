src/
│
├── assets/                 # Arquivos estáticos
│   ├── images/
│   ├── icons/
│   └── styles/
│       ├── global.css
│       └── variables.css
│
├── router/
│   ├── index.ts            # createRouter + guards
│   └── routes.ts
│
├── services/
│   ├── http.ts             # Instância do Axios
│   ├── authService.ts
│   ├── userService.ts
│   ├── subjectService.ts
│   ├── studySessionService.ts
│   └── taskService.ts
│
├── composables/
│   ├── useAsync.ts
│   ├── useDebounce.ts
│   ├── usePagination.ts
│   └── useLocalStorage.ts
│
├── stores/
│   ├── auth.ts
│   ├── theme.ts
│   └── notification.ts
│
├── types/
│   ├── apiResponse.ts
│   ├── user.ts
│   ├── subject.ts
│   ├── task.ts
│   ├── studySession.ts
│   └── routeMeta.d.ts
│
├── utils/
│   ├── date.ts
│   ├── format.ts
│   ├── validation.ts
│   └── constants.ts
│
├── shared/
│   │
│   ├── components/
│   │   ├── Button.vue
│   │   ├── Input.vue
│   │   ├── Modal.vue
│   │   ├── Card.vue
│   │   ├── Loading.vue
│   │   ├── ConfirmDialog.vue
│   │   └── EmptyState.vue
│   │
│   └── layouts/
│       ├── AppLayout.vue
│       └── AuthLayout.vue
│
├── modules/
│   │
│   ├── auth/
│   │   ├── pages/
│   │   │   └── LoginPage.vue
│   │   │
│   │   ├── components/
│   │   │   └── LoginForm.vue
│   │   │
│   │   └── store/
│   │       └── auth.ts
│   │
│   ├── users/
│   │   ├── pages/
│   │   │   ├── UserListPage.vue
│   │   │   └── UserEditPage.vue
│   │   │
│   │   ├── components/
│   │   │   ├── UserCard.vue
│   │   │   └── UserForm.vue
│   │   │
│   │   └── composables/
│   │       └── useUsers.ts
│   │
│   ├── subjects/
│   │   ├── pages/
│   │   ├── components/
│   │   └── composables/
│   │
│   ├── tasks/
│   │   ├── pages/
│   │   ├── components/
│   │   └── composables/
│   │
│   ├── studySessions/
│   │   ├── pages/
│   │   ├── components/
│   │   └── composables/
│   │
│   └── dashboard/
│       ├── pages/
│       │   └── DashboardPage.vue
│       │
│       └── components/
│           ├── DashboardCard.vue
│           ├── ProgressChart.vue
│           └── StatisticsCard.vue
│
├── App.vue
└── main.ts
O que vai em cada pasta?
assets/

Arquivos estáticos.

logo.png

background.jpg

fonts

global.css

Nunca coloque lógica aqui.

router/

Tudo relacionado às rotas.

createRouter()

beforeEach()

afterEach()

routes

Exemplo:

router/

    index.ts

    routes.ts
services/

Responsável por conversar com a API.

Frontend

↓

service

↓

Axios

↓

Backend

Exemplo:

userService.list()

userService.create()

taskService.update()

Aqui não existe ref nem computed.

composables/

Lógicas reutilizáveis que usam recursos do Vue.

Exemplo:

useAsync()

usePagination()

useTheme()

useLocalStorage()

Se você percebe que está copiando uma lógica entre componentes, provavelmente ela deve virar um composable.

stores/

Estado global.

Exemplo:

usuário logado

tema

notificações

idioma

Se vários componentes precisam acessar o mesmo estado, ele pertence a uma store.

types/

Interfaces e tipos.

User

Task

Subject

ApiResponse<T>

Também é um bom lugar para o:

routeMeta.d.ts

que você acabou de criar.

utils/

Funções puras.

Exemplo:

formatDate()

formatCurrency()

calculateAge()

isValidEmail()

Elas não usam Vue.

shared/

Tudo que é reutilizado por toda a aplicação.

Components
Button

Input

Card

Modal

Loading

Spinner

São componentes genéricos.

Layouts
AppLayout

AuthLayout

Controlam a estrutura das páginas.

Exemplo:

Header

RouterView

Footer
modules/

Aqui fica o coração da aplicação.

Cada funcionalidade possui sua própria organização.