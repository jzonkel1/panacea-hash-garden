import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Music, Palette, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const upcomingEvents = [
  { date: '2026-05-10', name: 'Stand-Up Comedy Night', type: 'comedy', time: '8:00 PM' },
  { date: '2026-05-12', name: 'Acoustic Music Evening', type: 'music', time: '7:00 PM' },
  { date: '2026-05-17', name: 'Local Art Market', type: 'art', time: '11:00 AM' },
  { date: '2026-05-24', name: 'Comedy Night & Open Mic', type: 'comedy', time: '8:00 PM' },
  { date: '2026-05-31', name: 'Summer Kickoff Block Party', type: 'community', time: '6:00 PM' },
  { date: '2026-06-07', name: 'Jazz Night Series', type: 'music', time: '7:30 PM' },
  { date: '2026-06-14', name: 'Vendor Market Pop-Up', type: 'art', time: '12:00 PM' },
  { date: '2026-06-21', name: 'Comedy Under the Stars', type: 'comedy', time: '8:00 PM' },
];

const iconMap = {
  comedy: Mic,
  music: Music,
  art: Palette,
  community: CalendarIcon,
};

const colorMap = {
  comedy: 'bg-purple-500/10 border-purple-500/20',
  music: 'bg-blue-500/10 border-blue-500/20',
  art: 'bg-pink-500/10 border-pink-500/20',
  community: 'bg-green-500/10 border-green-500/20',
};

const textColorMap = {
  comedy: 'text-purple-400',
  music: 'text-blue-400',
  art: 'text-pink-400',
  community: 'text-green-400',
};

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 4)); // May 2026

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array(firstDay).fill(null).concat(Array.from({ length: daysInMonth }, (_, i) => i + 1));

  const getEventsForDay = (day) => {
    const dateStr = `2026-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return upcomingEvents.filter(e => e.date === dateStr);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <section id="calendar" className="px-6 mb-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-2 font-medium">Mark Your Calendar</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-wide mb-2">Upcoming Events</h2>
          <p className="text-muted-foreground text-sm">
            Check back for updates. Events fill up fast.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6"
        >
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-primary" />
            </button>
            <h3 className="font-display text-lg font-semibold tracking-wide">{monthName}</h3>
            <button
              onClick={nextMonth}
              className="p-1 rounded-lg hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-primary" />
            </button>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-[10px] font-medium text-muted-foreground uppercase tracking-wide py-1">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, idx) => {
              const events = day ? getEventsForDay(day) : [];
              const hasEvent = events.length > 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.01 }}
                  className={`min-h-16 p-1 rounded border text-[11px] transition-all ${
                    day
                      ? hasEvent
                        ? 'bg-primary/5 border-primary/20'
                        : 'bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10'
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  {day && (
                    <div className="h-full flex flex-col">
                      <span className={`font-medium ${!hasEvent ? 'text-muted-foreground' : 'text-foreground'}`}>
                        {day}
                      </span>
                      {hasEvent && (
                        <div className="mt-0.5 space-y-0.5 flex-1 overflow-hidden">
                          {events.slice(0, 1).map((event, i) => {
                            const Icon = iconMap[event.type];
                            return (
                              <div
                                key={i}
                                className={`text-[8px] flex items-center gap-0.5 px-1 py-0.5 rounded border truncate ${colorMap[event.type]}`}
                                title={event.name}
                              >
                                <Icon className="w-2 h-2 shrink-0" />
                                <span className={`truncate ${textColorMap[event.type]}`}>
                                  {event.name.split(' ')[0]}
                                </span>
                              </div>
                            );
                          })}
                          {events.length > 1 && (
                            <div className="text-[7px] text-muted-foreground/60">+{events.length - 1} more</div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-5 pt-5 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(iconMap).map(([type, Icon]) => (
              <div key={type} className="flex items-center gap-1.5">
                <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${colorMap[type]}`}>
                  <Icon className={`w-2.5 h-2.5 ${textColorMap[type]}`} />
                </div>
                <span className="text-[10px] text-muted-foreground capitalize">{type}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-2 rounded text-[10px] text-muted-foreground/70 text-center bg-primary/5 border border-primary/15">
            Placeholder calendar. Check in-store for real event updates.
          </div>
        </motion.div>
      </div>
    </section>
  );
}