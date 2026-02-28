import React from 'react';
import NoteItem from './NoteItem';

function NotesList({
  notes,
  onDelete,
  onArchive,
  dataTestId = 'notes-list',
  searchKeyword = '',
}) {
  // TODO [Basic] validasi notes agar tidak kosong.
  const hasNotes = Array.isArray(notes) && notes.length > 0; // update dengan nilai yang sesuai

  if (!hasNotes) {
    return (
      <div className='notes-list' data-testid={dataTestId}>
        {/* TODO [Basic] tampilkan pesan kosong yang informatif ketika tidak ada catatan. */}
        <p
          className='notes-list__empty-message'
          data-testid={`${dataTestId}-empty`}
        >
          Tidak ada catatan.
        </p>
      </div>
    );
  }

  const groups = notes.reduce((acc, note) => {
    const date = new Date(note.createdAt);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    const label = date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
    });
    if (!acc[key]) acc[key] = { label, notes: [] };
    acc[key].notes.push(note);
    return acc;
  }, {});

  return (
    <div className="notes-list notes-list--grouped" data-testid={dataTestId}>
      {/* TODO [Basic] gunakan array.map untuk merender NoteItem untuk setiap catatan. */}
      {/* TODO [Skilled] ekstrak tombol aksi menjadi komponen reusable agar dipakai NoteItem. */}
      {/* TODO [Advanced] kelompokkan catatan per bulan-tahun dan render tiap grup dalam <section className="notes-group">. */}
      {Object.keys(groups)
        .sort((a, b) => b.localeCompare(a))
        .map((key) => (
          <section
            key={key}
            className="notes-group"
            data-testid={`${key}-group`}
          >
            <div className="notes-group__header">
              <h3 className="notes-group__title">{groups[key].label}</h3>
              <span
                className="notes-group__count"
                data-testid={`${key}-group-count`}
              >
                {groups[key].notes.length} catatan
              </span>
            </div>
            <div className="notes-group__items">
              {groups[key].notes.map((note) => (
                <NoteItem
                  key={note.id}
                  note={note}
                  onDelete={onDelete}
                  onArchive={onArchive}
                  searchKeyword={searchKeyword}
                />
              ))}
            </div>
          </section>
        ))}
    </div>
  );
}

export default NotesList;
