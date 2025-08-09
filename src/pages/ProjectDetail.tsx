import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { localizedRoutes } from '../routes';

export default function ProjectDetail() {
  const { lang = 'en', projectSlug = '' } = useParams();
  const p = projects.find(x =>
    x.slug.en === projectSlug || x.slug.es === projectSlug
  );

  if (!p) {
    return (
      <main className="bg-gray-900 text-white min-h-[60vh] grid place-items-center">
        <p>{lang === 'es' ? 'Proyecto no encontrado' : 'Project not found'}</p>
      </main>
    );
  }

  const r = localizedRoutes[lang as keyof typeof localizedRoutes];

  return (
    <main className="bg-gray-900 text-white py-14">
      <div className="max-w-4xl mx-auto px-4">
        <Link to={`/${lang}/${r.projects}`} className="text-indigo-300 hover:text-indigo-200 underline">
          {lang === 'es' ? '← Volver a proyectos' : '← Back to projects'}
        </Link>

        <h1 className="text-4xl font-extrabold mt-4">
          {p.title[lang as 'en' | 'es']}
        </h1>

        <img
          src={p.cover}
          alt={p.title[lang as 'en' | 'es']}
          className="mt-6 rounded-xl shadow-lg object-cover w-full max-h-[420px]"
        />

        <p className="mt-6 text-lg text-gray-200">
          {p.summary[lang as 'en' | 'es']}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map(tag => (
            <span key={tag} className="bg-gray-700 px-3 py-1 rounded-md text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
